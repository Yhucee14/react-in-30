
import { Input } from "./Input";

const Form = () => {
  return (
    <div className=" bg-gray-800 h-screen flex justify-center items-center text-gray-200">
     <div className="container">
     <div className="bg-white rounded-md p-10 w-full text-gray-800 grid gap-2 md:grid-cols-2">
        <Input 
        label='name'
        type='text'
        id='name'
        placeholder='Type your name...'
        />

        <Input
        label='password'
        type='password'
        placeholder='Type your password' 
        />
      </div>
     </div>
    </div>
  );
};

export default Form;
