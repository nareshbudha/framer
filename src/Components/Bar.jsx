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
      maxBarThickness: 20, // Set the maximum thickness for each bar
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
      labels: {
        font: {
          size: 20, // Set the font size for the legend labels
        },
      },
    },
    tooltip: {
      titleFont: {
        size: 20, // Set the font size for the tooltip title
      },
      bodyFont: {
        size: 20, // Set the font size for the tooltip body
      },
    },
  },
  scales: {
    y: {
      ticks: {
        font: {
          size: 28, // Set the font size for the y-axis labels
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 20, // Set the font size for the x-axis labels
        },
      },
    },
  },
};

export default function BarGraph() {
  return (
    <div className="flex flex-col justify-center mt-20 items-center rounded-2xl border-red-500 border-2 ml-[104px]">
      <Bar data={data} options={options} />
      <div className="flex flex-col tablet:flex-row mt-2 gap-5">
        <button className="bg-[#f59d13cc] rounded flex gap-2 p-2">
          पूर्ण विवरण: <p className="rounded-2xl bg-[#274e23] px-2 py-1">1000</p>
        </button>
      </div>
    </div>
  );
}
