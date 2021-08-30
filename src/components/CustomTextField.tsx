import React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";

type ExtendedTextFieldProps = TextFieldProps & {
  format?: string;
};

/**
 * function used for custom text field
 * @param props
 * @return input field
 */
function CustomTextField(props: ExtendedTextFieldProps) {
  return <TextField fullWidth required {...props} />;
}

export default CustomTextField;
