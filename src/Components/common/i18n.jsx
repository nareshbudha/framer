// import i18n from 'i18next';
// import languageDetector from 'i18next-browser-languagedetector';
// import {initReactI18next} from 'react-i18next';

// i18n.use(languageDetector).use(initReactI18next) .init({
//     debug:true,
//     lng:'en',
//      resources:{
//         nep:{
//             translation: {
//                 greeting:"सम्पर्क नम्बर",
//             },
//         },
//         en:{
//             translation: {
//                 greeting:"Contact Number",
//             },
//         },
//     }

// })
import React from "react";


import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

export default function Bar() {
  return (
    <div className="Bar">
      <Line data={data} />
    </div>
  );
}