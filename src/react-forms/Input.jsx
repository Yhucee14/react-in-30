import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";
import { FindInputError } from "./utilities/FindInputError";
import { IsFormInvalid } from "./utilities/IsFormInvalid";

export const Input = ({ name, label, type, id, placeholder, validation,  }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); //retrieve register function to register input, allowing it to handle validation

  const inputError = FindInputError(errors, name);
  const isInvalid = IsFormInvalid(inputError);

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>

        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>

      <input
        id={id}
        type={type}
        className="w-full bg-gray-200 p-2 font-normal border rounded-md"
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p className="flex items-center gap-2 font-semibold bg-red-100 text-red-500 rounded-md" {...framer_error}>
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
