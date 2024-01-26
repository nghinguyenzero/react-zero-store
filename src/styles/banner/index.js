import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import theme, { Colors } from "../theme";
import { Typography } from "@mui/material";

export const BannerContainer = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }

}))

export  const BannerContent = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 420,
    padding: '30px'
}))

export  const BannerTitle = styled(Typography)(({theme})=>({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px'
    }

}))
