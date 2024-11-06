import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import { motion } from "framer-motion";

const salesData = [
    { month: "Jan", sales: 4500 },
    { month: "Feb", sales: 3200 },
    { month: "Mar", sales: 5300 },
    { month: "Apr", sales: 2180 },
    { month: "May", sales: 1900 },
  ];

const SalesTrendChart = () => {
  return (
    <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Trend</h2>

    <div className="h-80">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#485563" />
          <XAxis dataKey={"month"} stroke="#9ca3af"/>
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(31, 41, 55, 0.8)",
              borderColor: "#4b5563",
            }}
            itemStyle={{ color: "#e5e7eb" }}
          />
            <Line
              type="linear"
              dataKey="sales"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: "#6366f1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
  )
}

export default SalesTrendChart