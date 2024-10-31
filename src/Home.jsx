
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-800 text-gray-200 h-screen items-center justify-center">
        <div className="py-5 font-bold text-[#df7676] text-2xl">
            React in 30..
        </div>

      <Link to="/quiz" className="py-2 ">
        <button className=" hover:shadow border hover:shadow-white text-lg rounded-xl p-2">
          Quiz App with useContext
        </button>
      </Link>

      <Link to="/signup" className="py-2 ">
        <button className=" hover:shadow border hover:shadow-white text-lg rounded-xl p-2">
          Form with react-use-form
        </button>
      </Link>

      <Link to="/chart" className="py-2 ">
        <button className=" hover:shadow border hover:shadow-white text-lg rounded-xl p-2">
          Charts with recharts
        </button>
      </Link>
    </div>
  );
};

export default Home;
