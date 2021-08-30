import "./App.css";
import React from "react";
import { Container, Paper, Box, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import RegistrationForm from "./components/RegistrationForm";

/**
 * Function for defining material UI styles
 *
 * @params theme
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, "auto"),
    },
    paper: {
      margin: theme.spacing(6, "auto"),
      padding: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3),
      }
    },
  })
);


/**
 * Function to initiate react application.
 */
function App() {
  const classes = useStyles();
  const steps = [
    "User Details",
    "Password"
  ];

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Box my={8} mx="auto" textAlign="center">
        <Typography color="primary" variant="h3">Create an Account</Typography>
      </Box>
      <Paper elevation={2} className={classes.paper}>
        <RegistrationForm steps={steps} />
      </Paper>
    </Container>
  );
}

export default App;
