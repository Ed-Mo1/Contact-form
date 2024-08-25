import { useController } from "react-hook-form";
import { Schema } from "../types/schema";
import { InputType } from "../types/input";
import InputLabel from "./InputLabel";

const RadioInput = (props: InputType) => {
  const {
    field,
    formState: { isSubmitting },
  } = useController<Schema>(props);
  return (
    <div
      className={`relative py-3 ps-5 hover:border-medium-green transition-colors pe-1 flex items-center gap-2 rounded-md border-[1.5px] ${
        field.value === props.value
          ? "border-medium-green bg-light-green"
          : "border-medium-grey"
      }`}
    >
      <input
        type="radio"
        {...field}
        value={props.value}
        id={props.label}
        readOnly={isSubmitting}
        checked={field.value === props.value}
        className="hidden peer"
      />
      <div className="w-[22px]  aspect-square rounded-full border-2 border-medium-grey peer-checked:border-medium-green bg-white p-1">
        <div />
      </div>
      <InputLabel label={props.label} name={props.label} />
    </div>
  );
};

export default RadioInput;
