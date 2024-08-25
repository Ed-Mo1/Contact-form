import InputLabel from "./InputLabel";
import { useController } from "react-hook-form";
import { Schema } from "../types/schema";
import { IoCheckbox } from "react-icons/io5";
import { ImCheckboxUnchecked } from "react-icons/im";
import { InputType } from "../types/input";

const Checkbox = (props: InputType) => {
  const {
    field,
    fieldState: { error },
  } = useController<Schema>(props);
  return (
    <div>
      <div className="flex items-center gap-3 ">
        <input
          type="checkbox"
          className="hidden peer"
          name={field.name}
          ref={field.ref}
          id={field.name}
          checked={!!field.value}
          onChange={() => field.onChange(!field.value)}
          onBlur={field.onBlur}
          disabled={field.disabled}
        />
        {field.value ? (
          <IoCheckbox className="text-medium-green text-xl" />
        ) : (
          <ImCheckboxUnchecked className="text-medium-green" />
        )}
        <InputLabel label={props.label} name={field.name} />
      </div>
      {error && <p className="text-red">{error?.message}</p>}
    </div>
  );
};

export default Checkbox;
