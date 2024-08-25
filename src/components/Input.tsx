import { useController } from "react-hook-form";
import { Schema } from "../types/schema";
import InputLabel from "./InputLabel";
import { InputType } from "../types/input";

const Input = (props: InputType) => {
  const {
    fieldState: { invalid, error },
    field,
    formState: { isSubmitting },
  } = useController<Schema>(props);

  return (
    <fieldset className="space-y-2">
      <InputLabel label={props.label} name={field.name} />
      <div>
        <input
          {...field}
          id={field.name}
          type={props.type}
          readOnly={isSubmitting}
          className={`py-2 px-2  rounded-md border-[1.5px] w-full focus:border-medium-green hover:border-medium-green border-medium-grey ${
            invalid && "border-red  focus:border-red"
          }`}
          value={field.value as string}
        />
        {invalid && <p className="text-red">{error?.message}</p>}
      </div>
    </fieldset>
  );
};

export default Input;
