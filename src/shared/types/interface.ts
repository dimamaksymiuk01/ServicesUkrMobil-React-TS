import {INPUT_FIELD} from "./types.ts";
import {ChangeEvent} from "react";

export interface IPropsInputGroup {
  type?: INPUT_FIELD;
  name?: string;
  id?: string;
  value?: string;
  className?: string;
  classNameInput?: string;
  classNameError?: string;
  errorMessage?: string;
  classNameWrapper?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}