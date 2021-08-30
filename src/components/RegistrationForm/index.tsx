import React from "react";
import PropTypes from "prop-types"

import {
  Step,
  StepLabel,
  Typography,
  Button,
  Stepper as MuiStepper,
  Box,
} from "@material-ui/core";

import useStyles from "./styles";
import Form from './Form';

/**
 * Component for registration users
 *
 * @component
 * @param props
 * @example
 * const user = {1
 *    name = 'Jitendra Nirnejak'
 *    email = 'jitendraNirnejak@gmail.com'
 *    password = 'Jite@56fb'
 * @return {string} 'Your Account Has Been Created Successfully!'
 */
function RegistrationForm(props: any) {
  const classes = useStyles();
  let { steps } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const isFinalStep = activeStep === steps.length - 1;

  /**
   * function for moving the form to the next page
   */
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  /**
   * function for moving the form backwards to the previous page
   */
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  /**
   * function used to reset the page flow to the initiate state
   */
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <MuiStepper activeStep={activeStep} alternativeLabel>
        {steps.map((label: string) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </MuiStepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Your Account Has Been Created Successfully!
            </Typography>
            <Box mt={4} textAlign="center">
              <Button onClick={handleReset}>ADD NEW ACCOUNT</Button>
            </Box>
          </div>
        ) : (
          <Form
            activeStep={activeStep}
            isFinalStep={isFinalStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}


RegistrationForm.propTypes = {
  /**
   * component props
   */
   steps: PropTypes.array.isRequired,
}

RegistrationForm.defaultProps = {
  steps: []
}

export default RegistrationForm;
