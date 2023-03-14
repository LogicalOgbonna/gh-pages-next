import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BarChart({ data, loading }: { data: any; loading: boolean }) {
  if (!data || !Object.keys(data).length || loading) return null;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = Object.keys(data);

  const dataOpt = {
    labels,
    datasets: [
      {
        label: "Open Issues",
        data: labels.map((age) => data[age].length),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="my-10">
      <p className="text-gray-600 font-semibold text-lg">
        Graphical view by age
      </p>
      <Bar options={options} data={dataOpt} />{" "}
    </div>
  );
}
