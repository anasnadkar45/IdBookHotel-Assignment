import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartData,
  type ChartOptions,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

interface UserChartProps {
  data: { date: string; count: number }[]
}

export default function UserChart({ data }: UserChartProps) {
  const chartData: ChartData<"line"> = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Weekly Signups",
        data: data.map((item) => item.count),
        borderColor: "rgba(99, 102, 241, 1)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 300)
          gradient.addColorStop(0, "rgba(99, 102, 241, 0.5)")
          gradient.addColorStop(1, "rgba(99, 102, 241, 0)")
          return gradient
        },
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "rgba(99, 102, 241, 1)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(17, 24, 39, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "rgba(107, 114, 128, 0.2)",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: (tooltipItems) => {
            return `${tooltipItems[0].label}`
          },
          label: (context) => {
            return `Signups: ${context.parsed.y}`
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(107, 114, 128, 0.1)",
        },
        ticks: {
          padding: 10,
          color: "rgba(107, 114, 128, 0.7)",
        },
        border: {
          dash: [4, 4],
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          padding: 10,
          color: "rgba(107, 114, 128, 0.7)",
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  }

  return (
    <div className="h-[300px]">
      <Line data={chartData} options={options} />
    </div>
  )
}
