import { BarChart2, DollarSign, Icon, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  {
    name: "Users",
    Icon: Users,
    color: "#8b5cf6",
    path: "/users",
  },
  {
    name: "Sales",
    Icon: DollarSign,
    color: "#10b981",
    path: "/sales",
  },
  {
    name: "Orders",
    Icon: ShoppingCart,
    color: "#f59ee0b",
    path: "/orders",
  },
  {
    name: "Analytics",
    Icon: TrendingUp,
    color: "#10b981",
    path: "/analytics",
  },
  {
    name: "Settings",
    Icon: Settings,
    color: "#6ee7b7",
    path: "/settings",
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

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item, index) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center text-sm font-medium p-4 rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.Icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
