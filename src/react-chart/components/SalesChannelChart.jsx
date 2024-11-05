import { motion } from "framer-motion";
import {
    Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#6366f1", "#885cf6", "#ec4899", "#108981", "#f59e0b"];

const salesChannelData = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 36200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 },
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border md:col-span-2 border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales by Channel
      </h2>

      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={salesChannelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#485563" />
            <XAxis dataKey={"name"} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(33, 41, 55, 0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend />
            <Bar dataKey={'value'} fill="#8884d8">
            {salesChannelData.map((entry, index) => (
                    <Cell key={`cell-$(index)`} fill={ COLORS[index % COLORS.length]} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;
