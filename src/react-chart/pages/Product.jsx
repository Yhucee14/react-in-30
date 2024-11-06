import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductTable from "../components/product/ProductTable";
import CategoryChart from "../components/CategoryChart";
import SalesTrendChart from "../components/product/SalesTrendChart";

const Product = () => {
  return (
    <div
      className="flex-1 overflow-auto relative h-full bg-gray-800 text-gray-100
    z-10"
    >
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-3 lg:px-5">
        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total product"
            icon={Package}
            value={1234}
            color="#6366f1"
          />
          <StatCard
            name="Top Selling"
            icon={TrendingUp}
            value={89}
            color="#8b5cf6"
          />
          <StatCard
            name="Low stock"
            icon={AlertTriangle}
            value={23}
            color="#f59e0b"
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={"$543,100"}
            color="#ef4444"
          />
        </motion.div>

        <ProductTable />

        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryChart />
        </div>
      </main>
    </div>
  );
};

export default Product;
