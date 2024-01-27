import { Box, styled } from "@mui/system";
// import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import { Typography } from "@mui/material";


export  const PromotionsContainer = styled(Box)(({theme})=>({
    
    [theme.breakpoints.up('md')] : {
        padding: '40px 0px'
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px',
    // overflow: 'hidden',
    background: Colors.secondary

}))


export  const MessengerText = styled(Typography)(({theme})=>({
    fontFamily: '"Montez", "cursive"',
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem'
    },
    color: Colors.white,
    fontSize: '1.5rem'

}))
