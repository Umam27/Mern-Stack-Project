import React, { useState, useEffect } from 'react';

import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import Icon from './icon';
import {gapi} from 'gapi-script';
import useStyles from './styles';

import Input from './Input';
// import { signin , signup} from '../../actions/auth';

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};
const Auth = () => {

    const classes = useStyles();


    
    const [showPassword, setShowPassword] = useState(false);

    const [isSignUp, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    // Current state is to show SignIn page.
<<<<<<< HEAD

    /*
        if isSignUp is true => you are in sign up mode
        else you are sign in mode.
    */



    const handleSubmit = () => {

=======
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        // e.preventDefault();
        // console.log(formData);
        // if(isSignUp){
        //  dispatch(signup(formData,history));
        // }
        // else
        // {
        //     dispatch(signin(formData,history));
        // }
>>>>>>> db538e8ce9b2b00d3b4c524b47b54788aa517556
    };

    const switchMode = () => {
        setIsSignup((prevIsSignUp) => !prevIsSignUp);
        handleShowPassword(false);
    }

    const handleChange = (e) => {
        // setFormData({...formData, [e.target.name]: e.target.value});

    };

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
<<<<<<< HEAD
    
    return(
        <Container component = "main" maxWidth = "xs">
            <Paper className = {classes.paper} elevation={3}>


=======

    const googleSuccess = async(res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        console.log("Login sucess",res);
        try {
            dispatch({type:'AUTH', data: {result,token}});

            history.push('/');


        } catch (error) {
            console.log(error);
            
        }
    };
    const googleFaliure = (error) => {
        console.log(error);
        alert("Google sign in was unsuccessful");
    };

    useEffect(()=> {
        function start() {
            gapi.client.init({
                clientId: "433227471771-o2snql8hvgpooov2e8757l9ehk983uld.apps.googleusercontent.com",
                scope: ""
            })
        };
        gapi.load('client:auth2',start);
    });

    //var accessToken = gapi.auth.getToken().access_token;
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
>>>>>>> db538e8ce9b2b00d3b4c524b47b54788aa517556
                <Avatar className={classes.avatar}>
                    <LockOutLinedIcon />
                </Avatar>

                <Typography variant="h4">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />

                                    <Input name='lastName' label='Last Name' handleChange={handleChange} half
                                    />
                                </>
                            )
                        }
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email' />

                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />

                        {
                            isSignUp && <Input name='confirmPassword' label='Re-Enter Password' handleChange={handleChange} type="password" />
                        }

                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>

                        {
                            isSignUp ? 'Sign Up' : ' Sign In'
                        }

                    </Button>
                    <GoogleLogin
                        clientId="433227471771-o2snql8hvgpooov2e8757l9ehk983uld.apps.googleusercontent.com"
                        // render={(renderProps) => (
                        //     <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained" > Google SignIn
                        //     </Button>
                        // )}
                        buttonText="Sign up with google"
                        onSuccess={googleSuccess}
                        onFailure={googleFaliure}
                        cookiePolicy="single_host_origin"
                    />



                    <Grid container justify="flex">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {
                                    isSignUp ? 'Already have an account? Sign In' : 'Dont have an account? Sign Up'
                                }
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </Paper>
        </Container>
    )
};

export default Auth;