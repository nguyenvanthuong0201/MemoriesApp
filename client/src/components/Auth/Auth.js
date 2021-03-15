import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import useStyles from "./styles";
import {useDispatch} from 'react-redux'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import Icon from "./Icon";
import { useHistory } from "react-router";
const Auth = () => {
    const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPassword = () => setShowPassword((show) => !show);
  const switchMode = () => {
    setIsSignUp((user) => !user);
    setShowPassword(false);
  };
  const googleSuccess = async (res)=>{
    console.log('googleSuccess',res)
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
        dispatch({type:"AUTH", data:{ result,token}});
        history.push("/");
    } catch (error) {
        console.log('error', error)
    }
  }
  const googleError = ()=>{
      console.log('googleError')
}
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Pass Word"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>

            <GoogleLogin
            clientId="707156866767-h75v72lopj25mck757u0sqnuonn0stfn.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="secondary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          </Grid>
          <Grid container justify="center">
            <Button onClick={switchMode}>
              {isSignUp
                ? "Already have an account ? Sign In"
                : "Don't have an account ?"}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
