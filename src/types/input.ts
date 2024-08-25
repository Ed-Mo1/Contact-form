import { UseControllerProps } from "react-hook-form";
import { Schema } from "./schema";

export interface InputType extends UseControllerProps<Schema> {
  label: string;
  value?: string ;
  type?: string;
}
