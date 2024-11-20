import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// Register the necessary components in Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Data for the Doughnut Chart
  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Hours",
        data: [23, 5],
        backgroundColor: [
          "rgba(200, 0, 255, 0.4)",
          "rgba(200, 200, 200, 1)",
          //   "rgba(255, 100, 100, 0.2)",
          //   "rgba(75, 192, 192, 0.6)",
          //   "rgba(153, 102, 255, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(200, 0, 255, 0.5)",
          "rgba(255, 100, 100, 0.2)",
        ],
        borderColor: [
          "rgba(200, 0, 255, 0.8)",
          "rgba(200, 200, 200, 1)",
          //   "rgba(255, 206, 86, 1)",
          //   "rgba(75, 192, 192, 1)",
          //   "rgba(153, 102, 255, 1)",
        ],
        hoverBorderColor: [
          "rgba(200, 0, 255, 0.8)",
          "rgba(200, 100, 100, 0.9)",
        ],
        borderWidth: 1,
        hoverBorderWidth: 2,
        hoverOffset: 20,
        borderRadius: 0,
        spacing: 1,
      },
    ],
  };

  // Options for the Doughnut Chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    radius: "95%",
    circumference: 360,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="w-full h-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-center text-2xl opacity-80">
        <p>Completion</p>
        <p className="font-semibold">70%</p>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
