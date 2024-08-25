import { InputType } from "../types/input";
import { Schema } from "../types/schema";
import { useController } from "react-hook-form";
import InputLabel from "./InputLabel";

const TextInput = (props: InputType) => {
  const {
    field,
    fieldState: { invalid, error },
    formState: { isSubmitting },
  } = useController<Schema>(props);
  return (
    <fieldset className="space-y-2">
      <InputLabel label={props.label} name={field.name} />
      <div>
        <textarea
          {...field}
          id={field.name}
          className={`w-full h-[100px] focus:border-medium-green hover:border-medium-green overflow-auto  rounded-md border-[1.5px] border-medium-grey resize-none p-2  ${
            invalid && "border-red  focus:border-red"
          }`}
          value={field.value as string}
          readOnly={isSubmitting}
        />
        {invalid && <p className="text-red">{error?.message}</p>}
      </div>
    </fieldset>
  );
};

export default TextInput;
