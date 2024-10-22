import { FormProvider, useForm } from "react-hook-form";
import { Input } from "./Input";
import { GrMail } from "react-icons/gr";
import { name_validation, email_validation, password_validation } from "./utilities/InputValidations";

const Form = () => {
  const methods = useForm(); //setup form method from react-hook-form

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });  //utilizes the method to handle form submission and display data in the console

  return (
    <FormProvider {...methods}>
      <div className=" bg-gray-800 h-screen flex justify-center items-center text-gray-200">
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate //ensures the use of react-hook-form for validation
          autoComplete="off"
          className="container"
        >
          <div className="bg-white rounded-md p-10 w-full text-gray-800 grid gap-2 md:grid-cols-2">
            <Input {...name_validation} />
            <Input {...email_validation} />
            <Input {...password_validation} />

            <div className="mt-5">
              <button
                onClick={onSubmit}
                className="flex hover:bg-gray-200 hover:border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 gap-2 items-center p-2 font-semibold text-gray-200 rounded-md bg-gray-800"
              >
                <GrMail />
                Submit form
              </button>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default Form;
