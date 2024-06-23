import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';// Custom CSS styles
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import Text from 'ol/style/Text';
import Select from 'ol/interaction/Select';
import Overlay from 'ol/Overlay';
import { pointerMove } from 'ol/events/condition';
import { useGeographic } from 'ol/proj';  // Import useGeographic

const WardMap = () => {
  const mapRef = useRef();
  const popupRef = useRef();
  const closerRef = useRef();

  useGeographic();  // Call useGeographic at the top level of the component

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
          className: 'grayscale',
        }),
      ],
      view: new View({
        center: [81.7778, 28.6332],  // Directly use [longitude, latitude] coordinates
        zoom: 12,
      }),
    });
//border of the different ward//
    const styleFunction = (feature, resolution) => (
      new Style({
        stroke: new Stroke({
          color: 'red',
          width: 1,
        }),
        //field color of the ward
        fill: new Fill({
          color: '#64e3ac',
        }),
        text: new Text({
          font: '18px Calibri,sans-serif',
          fill: new Fill({ color: 'blue' }),
          stroke: new Stroke({
            color: '#0000', width: 3,
          }),
          text: feature.get('WARD').toString(),
        }),
      })
    );

    const hoverStyle = new Style({
      stroke: new Stroke({
        color: 'red',
        width: 1,
      }),
      fill: new Fill({
        color: '#07ed2d',
      }),
    });

    const vectorSource = new VectorSource({
      url: 'birendranagar-wards.geojson',
      format: new GeoJSON(),
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: styleFunction,
    });

    map.addLayer(vectorLayer);

    const selectInteraction = new Select({
      condition: pointerMove,
      layers: [vectorLayer],
      style: hoverStyle,
    });

    map.addInteraction(selectInteraction);

    const overlay = new Overlay({
      element: popupRef.current,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });

    map.addOverlay(overlay);

    closerRef.current.onclick = function () {
      overlay.setPosition(undefined);
      closerRef.current.blur();
      return false;
    };

    map.on('singleclick', function (event) {
      map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
        const coord = event.coordinate;
        const props = feature.getProperties();
        document.getElementById('popup-content').innerHTML = `<p> Ward Number: ${props.WARD}</p>`;
        overlay.setPosition(coord);
      });
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div className='flex    rounded-3xl'>
      <div className='flex justify-end' id="map" ref={mapRef} style={{ width: '100%', height: '800px',}}></div>
      <div id="popup" ref={popupRef} className="ol-popup">
        <a href="#" ref={closerRef} className="ol-popup-closer"></a>
        <div id="popup-content"></div>
      </div>
    </div>
  );
};

export default WardMap;