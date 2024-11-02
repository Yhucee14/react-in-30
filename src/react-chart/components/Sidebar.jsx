import { BarChart2, Icon, ShoppingBag } from "lucide-react";
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
    ></motion.div>
  );
};

export default Sidebar;
