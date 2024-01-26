import { useEffect } from 'react';
import {  Button, Container } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import Appbar from './components/appbar';
import './App.css';
import theme from './styles/theme';
import Banner from './components/banner';

function App() {

  useEffect(()=>{
    document.title='React UI - Home'
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
        {/* App
        Promotions
        title
        Products
        footer
        Searchbox
        AppWrapper */}
        <Button variant='contained'> Test</Button>
      </Container>
    </ThemeProvider>

  );
}

export default App;
