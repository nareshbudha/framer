import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
    labels: [
      "प्राप्त भएको पूर्ण विवरण",
      "स्वीकृत विवरण",
      "अस्वीकृत विवरण",
      "अपूर्ण विवरण",
    ],
    datasets: [
      {
        label: "किसान परिवारको कुल संख्या (घरधुरी)",
        data: [7775.0, 0.0, 1.0, 997.0],
        backgroundColor: "rgb(149, 206, 255)",
        borderColor: "rgb(255, 0, 0)",
        borderWidth: 0,
        maxBarThickness: 50, // Set the maximum thickness for each bar
      },
    ],
  };
  
const options = {
    plugins: {
      title: {
        display: true,
        text: "प्रमाणिकरणका लागि अनुरोध प्राप्त भएको जानकारीहरू",
        font: {
          size: 30, // Set the font size for the title
        },
      },
      legend: {
        position: "bottom", // Set the legend position to bottom
        labels: {
          font: {
            size: 20, // Set the font size for the legend labels
          },
        },
      },
      tooltip: {
        titleFont: {
          size: 10, // Set the font size for the tooltip title
        },
        bodyFont: {
          size: 10, // Set the font size for the tooltip body
        },
      },
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: 15, // Set the font size for the y-axis labels
          },
          callback: function (value, index, values) {
            return value / 1000 + 'k'; // convert value to k and append 'k'
          }
        },
        suggestedMin: 0, // Set the minimum value for the y-axis
        suggestedMax: 20000, // Set the maximum value for the y-axis
      },
      x: {
        ticks: {
          font: {
            size: 15, // Set the font size for the x-axis labels
          },
        },
      },
    },
  };
export default function BarGraph() {
  return (
    <div className="flex flex-col justify-center items-center md:w-4/5 md:ml-auto md:mr-auto mt-10">
      <Bar data={data} options={options} />
    </div>
  );
}
