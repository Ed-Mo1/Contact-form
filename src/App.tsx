import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, schema } from "./types/schema";
import Input from "./components/Input";
import RadioInput from "./components/RadioInput";
import TextInput from "./components/TextInput";
import InputLabel from "./components/InputLabel";
import Checkbox from "./components/Checkbox";
import Loading from "./components/Loading";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      fName: undefined,
      lName: undefined,
      email: undefined,
      getContact: false,
      message: undefined,
      qType: undefined,
    },
  });

  const onSubmit: SubmitHandler<Schema> = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    toast(
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <IoIosCheckmarkCircleOutline className="text-2xl text-white" />
          <h4 className="text-xl font-medium">Message Sent!</h4>
        </div>
        <p className="text-md tracking-widest	  text-opacity-60">
          Thanks for completing the form.
        </p>
      </div>,
      {
        position: "top-center",
        className: "custom-toast",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        hideProgressBar: true,
        theme: "dark",
      }
    );

    reset({
      fName: undefined,
      lName: undefined,
      email: undefined,
      getContact: false,
      message: undefined,
      qType: undefined,
    });
  };
  return (
    <div className="bg-light-green py-2 min-h-screen grid place-items-center">
      <div className="w-[95%] animate-[show_0.7s_ease-in] max-w-[600px] bg-white p-7 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mt-1  mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* name inputs */}
          <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-3">
            <Input
              label="First Name"
              type="text"
              control={control}
              name="fName"
            />
            <Input
              label="Last Name"
              type="text"
              control={control}
              name="lName"
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            control={control}
            name="email"
          />

          {/* query inputs */}
          <div className="space-y-2">
            <InputLabel label="Query Type" name="General Enquiry" />
            <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-3 ">
              <RadioInput
                control={control}
                name="qType"
                value="general_enquiry"
                label="General Enquiry"
              />
              <RadioInput
                control={control}
                name="qType"
                value="support_request"
                label="Support Request"
              />
            </div>
            {errors.qType && <p className="text-red">{errors.qType.message}</p>}
          </div>

          <TextInput label="Message" control={control} name="message" />

          <Checkbox
            label="I consent to being contacted by the team"
            name={"getContact"}
            control={control}
          />

          <button
            type="submit"
            className={`  text-white hover:bg-white ${
              isSubmitting ? "bg-white" : "bg-medium-green"
            } hover:text-medium-green border-2 border-medium-green p-3 rounded-md font-medium w-full`}
          >
            {isSubmitting ? <Loading /> : "Submit"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
