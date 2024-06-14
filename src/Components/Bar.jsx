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
  labels: ["प्राप्त भएको पूर्ण विवरण", "स्वीकृत विवरण", "अस्वीकृत विवरण", "अपूर्ण विवरण"],
  datasets: [
    {
      label: "किसान परिवारको कुल संख्या (घरधुरी)",
      data: [7775.0, 0.0, 1.0, 997.0],
      backgroundColor: "rgb(149, 206, 255)",

      borderColor: "rgb(255, 255, 255)",
      borderWidth: 1,
      barPercentage: 0.5,
      borderDash: [5, 5], 
      
    },
  ]
};
const options = {
  plugins: {
    title: {
      display: true,
      text: "प्रमाणिकरणका लागि अनुरोध प्राप्त भएको जानकारीहरू",
      font: {
        size: 30, // set the font size for the title
      },
    },
  },
  scales: {
    y: {
      ticks: {
        font: {
          size:28, // set the font size for the y-axis labels
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 20, // set the font size for the y-axis labels
        },
      },
    },
  },
  
  legend: {
    labels: {
      font: {
        size: 1, // set the font size for the legend labels
      },
    },
  },
  tooltips: {
    titleFont: {
      size: 20, // set the font size for the tooltip title
    },
    bodyFont: {
      size: 20, // set the font size for the tooltip body
    },
  },
};
export default function BarGraph() {
  return (
    <div className="flex flex-col justify-center items-center rounded-2xl border-red-500 border-2 ml-[104px] mr-1 mt-2 ">
      <Bar className="flex  " data={data} options={options} />
    </div>
  );
}
