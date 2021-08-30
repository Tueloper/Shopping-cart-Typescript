import React from "react";
import { Formik } from "formik";
import PropTypes from "prop-types"

import { UserSchema } from "./schemas";

import {
  Button,
  FormControl,
  FormHelperText,
  Box,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

import TextField from "../CustomTextField";
import useStyles from "./styles";

const API_URL:string = process.env.REACT_APP_API_URI!;
interface Props {
  handleNext: () => void;
  handleBack: () => void;
  activeStep: number;
  isFinalStep: boolean;
}

/**
 * function for inputing the user form details
 * @param Props
 */
function Form({
  handleNext,
  handleBack,
  activeStep,
  isFinalStep,
}: Props) {
  const classes = useStyles();
  return (
    <div>
      <Formik
        validateOnMount
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
          termsAgreement: false,
        }}
        validationSchema={UserSchema}
        onSubmit={async (values) => {
          const { password2, ...data } = values;

          const user = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(data),
          });
          console.log(user);
          handleNext();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          let disableNextButton: boolean = false;

          if (activeStep === 0) {
            disableNextButton = !!(
              errors.name ||
              errors.email
            );
          } else if (activeStep === 1) {
            disableNextButton = !!(
              errors.password ||
              errors.password2 ||
              errors.termsAgreement
            );
          }
          
          return (
            <Box>
              <form onSubmit={handleSubmit}>
                {activeStep === 0 && (
                  <Box>
                    <FormControl required className={classes.formControl}>
                      <TextField
                        name="name"
                        required
                        fullWidth
                        className={classes.formControl}
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="input-name"
                        label="Full name"
                        error={!!(touched.name && errors.name)}
                        helperText={
                          !!(touched.name && errors.name) ? errors.name : ""
                        }
                      />
                    </FormControl>
                    <FormControl required className={classes.formControl}>
                      <TextField
                        name="email"
                        required
                        fullWidth
                        className={classes.formControl}
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="input-email"
                        label="Email address"
                        error={!!(touched.email && errors.email)}
                        helperText={
                          !!(touched.email && errors.email) ? errors.email : ""
                        }
                      />
                    </FormControl>
                  </Box>
                )}

                {activeStep === 1 && (
                  <Box>
                  <FormControl required className={classes.formControl}>
                    <TextField
                      name="password"
                      type="password"
                      required
                      fullWidth
                      className={classes.formControl}
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="input-password"
                      label="Password"
                      error={!!(touched.password && errors.password)}
                      helperText={
                        !!(touched.password && errors.password) ? errors.password : ""
                      }
                    />
                  </FormControl>
                  <FormControl required className={classes.formControl}>
                    <TextField
                      name="password2"
                      type="password"
                      required
                      fullWidth
                      className={classes.formControl}
                      value={values.password2}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="input-password2"
                      label="Confirm pssword"
                      error={!!(touched.password2 && errors.password2)}
                      helperText={
                        !!(touched.password2 && errors.password2) ? errors.password2 : ""
                      }
                    />
                  </FormControl>
                  <FormControlLabel
                        className={classes.formControl}
                        control={
                          <Checkbox
                            checked={values.termsAgreement}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="termsAgreement"
                            color="primary"
                          />
                        }
                        label="I have read and agreed with the terms and conditions."
                      />
                      <FormHelperText
                        error={
                          !!(touched.termsAgreement && errors.termsAgreement)
                        }
                      >
                        {!!(touched.termsAgreement && errors.termsAgreement)
                          ? errors.termsAgreement
                          : ""}
                      </FormHelperText>
                </Box>
                )}
              </form>
              
              <Box mt={6}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  disabled={disableNextButton}
                  variant="contained"
                  color="primary"
                  onClick={() => (isFinalStep ? handleSubmit() : handleNext())}
                >
                  {isFinalStep ? "Create account" : "Next"}
                </Button>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </div>
  );
}

Form.propTypes = {
  /**
   * Form next handler
   */
  handleNext: PropTypes.func.isRequired,

  /**
   * Form back handler
   */
   handleBack: PropTypes.func.isRequired,
  
  /**
   * current active step
   */
   activeStep: PropTypes.number.isRequired,

  /**
   * final step
   */
   isFinalStep: PropTypes.bool.isRequired,
}

Form.defaultProps = {
  handleNext: () => {},
  handleBack: () => {},
  activeStep: 0,
  isFinalStep: false,
}

export default Form;
