import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700">
      <div className="px-3 py-5 sm:p-5">
        <span className="flex items-center text-sm font-medium text-gray-300">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 px-2 py-2 text-2xl">{value}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
