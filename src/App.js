import { useEffect } from 'react';
import {  Box, Button, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import Appbar from './components/appbar';
import './App.css';
import theme from './styles/theme';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';

function App() {

  useEffect(()=>{
    document.title='OP Store'
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth='xl'
        sx={{
          background: '#fff'
        }}
      >
        <Appbar/>
        <Banner/>
        <Promotions/>
        <Box display={'flex'} justifyContent={'center'} sx={{p: 4}}>
          <Typography variant='h4'>
              Our products
          </Typography>
        </Box>
        <Products/>
        <Footer/>

      </Container>
    </ThemeProvider>

  );
}

export default App;
