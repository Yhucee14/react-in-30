import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesChart from "../components/overview/SalesChart";
import CategoryChart from "../components/CategoryChart";
import SalesChannelChart from "../components/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative h-full bg-gray-800 text-gray-100
     z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-3 lg:px-5">
        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#6366f1"
          />
          <StatCard
            name="New Users"
            icon={Users}
            value="1,234"
            color="#8b5cf6"
          />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="$67"
            color="#ec4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={BarChart2}
            value="12.5%"
            color="#108981"
          />
        </motion.div>
      </main>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SalesChart />
        <CategoryChart />
        <SalesChannelChart />
      </div>
    </div>
  );
};

export default OverviewPage;
