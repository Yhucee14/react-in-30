import { FormProvider, useForm } from "react-hook-form";
import { Input } from "./Input";
import { GrMail } from "react-icons/gr";
import {
  name_validation,
  email_validation,
  password_validation,
} from "./utilities/InputValidations";
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const methods = useForm(); //setup form method from react-hook-form
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);

    setTimeout(() => {
      navigate("/profile"); // Navigate to the profile page
    }, 1000); // Delay to show the success message for a moment
  }); //utilizes the method to handle form submission, reset the form and display data in the console

  return (
    <FormProvider {...methods}>
      <div className=" bg-gray-800 h-screen px-3 flex flex-col justify-center items-center text-gray-200">
        <div className="py-5 font-bold text-2xl">
           Signup
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate //ensures the use of react-hook-form for validation
          autoComplete="off"
          className="container bg-white md:w-[700px] rounded-md p-10 w-full text-gray-800"
        >
          <div className="  grid gap-2 ">
            <Input {...name_validation} />
            <Input {...email_validation} />
            <Input {...password_validation} />
          </div>
          <div className="mt-8 ">
            {success && (
              <p className="flex items-center gap-2 mb-2 font-bold text-green-500 rounded-md ">
                <BsFillCheckCircleFill />
                Submitted Successfully
              </p>
            )}
            <button
              onClick={onSubmit}
              className="flex hover:bg-gray-200 hover:border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 gap-2 items-center p-2 font-semibold text-gray-200 rounded-md bg-gray-800"
            >
              <GrMail />
              Submit form
            </button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default SignupForm;
