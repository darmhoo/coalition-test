import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChevronDown } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function LineChart({ chartData }) {
  const options = {
    responsive: true,
    plugins: {

      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
      legend: {
        display: false
      }
    },
  };

  const labels = chartData.map((item) => `${item.month.slice(0, 3)}, ${item.year}`).slice(0, 6).reverse();
  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: chartData.map((item) => item.blood_pressure.systolic.value).slice(0, 6).reverse(),
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2',
        cubicInterpolationMode: 'monotone'
      },
      {
        label: 'Diastolic',
        data: chartData.map((item) => item.blood_pressure.diastolic.value).slice(0, 6).reverse(),
        borderColor: '#8C6FE6',
        backgroundColor: '#8C6FE6',
        cubicInterpolationMode: 'monotone'

      }
    ]
  }
  return (
    <div className="chart-container flex flex-col justify-center">
      <div className="flex justify-between px-10">
        <h2 style={{ textAlign: "left" }}>Blood Pressure</h2>
        <span className="font-light text-sm flex items-center"><span>Last 6 months</span> <ChevronDown /></span>

      </div>
      <div className="w-full">
        <Line

          data={data}
          options={options}
        />
      </div>

    </div>
  );
}
export default LineChart;