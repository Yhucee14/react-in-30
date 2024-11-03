import { BarChart2, Icon, Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    Icon: BarChart2,
    color: "#6366f1",
    path: "/overview",
  },
  {
    name: "Products",
    Icon: ShoppingBag,
    color: "#ec4899",
    path: "/product",
  },
];

const Sidebar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSideBarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSideBarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
