import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Sample data
  const barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Visitors",
        data: [30, 45, 35, 50, 70],
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Typography variant="h3" className="mb-6 text-blue-500">
        Dashboard
      </Typography>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart Card */}
        <Card className="shadow-lg">
          <CardBody>
            <Typography variant="h6" className="mb-4">
              Task Activity
            </Typography>
            <Bar data={barData} options={{ responsive: true }} />
          </CardBody>
        </Card>
        {/* Line Chart Card */}
        <Card className="shadow-lg">
          <CardBody>
            <Typography variant="h6" className="mb-4">
              Weekly Visitors
            </Typography>
            <Line data={lineData} options={{ responsive: true }} />
          </CardBody>
        </Card>
        {/* Pie Chart Card */}
        <Card className="shadow-lg">
          <CardBody>
            <Typography variant="h6" className="mb-4">
              Events Distributions
            </Typography>
            <Pie data={pieData} options={{ responsive: true }} />
          </CardBody>
        </Card>
        {/* Summary Card */}=
        {/* <Card className="shadow-lg">
          <CardBody>
            <Typography variant="h6" className="mb-4 text-center text-blue-600">
              Dashboard Overview
            </Typography>
            <div className="flex flex-wrap justify-around">
              <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md">
                <div className="p-3 bg-blue-500 text-white rounded-full">
                  <i className="fas fa-dollar-sign text-xl"></i>
                </div>
                <div>
                  <Typography variant="small" className="text-gray-500">
                    Total Sales
                  </Typography>
                  <Typography variant="h5" className="text-blue-500">
                    $24,500
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md">
                <div className="p-3 bg-green-500 text-white rounded-full">
                  <i className="fas fa-users text-xl"></i>
                </div>
                <div>
                  <Typography variant="small" className="text-gray-500">
                    Active Users
                  </Typography>
                  <Typography variant="h5" className="text-green-500">
                    1,245
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md">
                <div className="p-3 bg-yellow-500 text-white rounded-full">
                  <i className="fas fa-shopping-cart text-xl"></i>
                </div>
                <div>
                  <Typography variant="small" className="text-gray-500">
                    New Orders
                  </Typography>
                  <Typography variant="h5" className="text-yellow-500">
                    345
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-md">
                <div className="p-3 bg-red-500 text-white rounded-full">
                  <i className="fas fa-chart-line text-xl"></i>
                </div>
                <div>
                  <Typography variant="small" className="text-gray-500">
                    Total Profit
                  </Typography>
                  <Typography variant="h5" className="text-red-500">
                    $7,800
                  </Typography>
                </div>
              </div>
            </div>
          </CardBody>
        </Card> */}
      </div>
    </div>
  );
};

export default Dashboard;
