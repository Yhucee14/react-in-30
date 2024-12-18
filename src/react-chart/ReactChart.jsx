import Sidebar from "./components/Sidebar";


const ReactChart = () => {
  return (
    <div className="flex h-full bg-gray-900 text-gray-100">
      <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
      <div className="absolute inset-0 backdrop-blur-sm" />

     
      </div>
       <Sidebar />

       <div className="text-gray-100 z-30">
        welcome
       </div>
    </div>
  );
};

export default ReactChart;
