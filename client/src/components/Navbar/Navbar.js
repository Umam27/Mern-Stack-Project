
import React from "react";
import { Link } from "react-router-dom";

// --------------------------------------------------------------------------------
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
// --------------------------------------------------------------------------------

import useStyles from "./styles";
import photos from "../../images/photos.png";

// --------------------------------------------------------------------------------

import React, { useEffect, useState } from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from './styles';  
import photos from '../../images/photos.png';

const Navbar = () => {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={photos}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar classname={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
