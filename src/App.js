import { useEffect } from 'react';
import {  Box, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import Appbar from './components/appbar';
import './App.css';
import theme from './styles/theme';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/search';
import Cart from './components/cart';
import UserProvider from './context/ui/User';

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
        <UIProvider>
          <UserProvider>
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
            <AppDrawer/>
            <Cart/>
            <SearchBox/>
          </UserProvider>
        </UIProvider>
      </Container>
    </ThemeProvider>

  );
}

export default App;
