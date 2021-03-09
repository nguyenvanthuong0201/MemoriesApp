import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getPosts } from './actions/posts';
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {

  return (
    <Container maxWidth="lg">
      {/* <Navbar/> */}
      <Home/>
    </Container>
  );
};

export default App;
