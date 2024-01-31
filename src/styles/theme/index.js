import { createTheme, lighten } from "@mui/material"

export const Colors =  {
    primary: '#5f2c3e',
    secondary: '#d1adcc',
    success: '#4caf50',
    info: '#00a2ff',
    danger: '#ff5722',
    warning: '#ffc107',
    dark: '#0e1b20',
    light : '#aaa',
    muted: '#abafb3',
    border: '#dddfe1',
    inserse: '#2f3d4a',
    shaft: '#333',
    // GREY
    dim_grey: '#696969',
    dove_gray: '#d5d5d5',
    body_bg: '#f3f6f9',
    light_gray: 'rgb(230, 230, 230)',
    // SOLID
    white: '#fff',
    black: '#000'
}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        } 
    },
     components:  {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        },
        MyShopButton: {
            styleOverrides: {
                root: {
                    color: Colors.white
                },
                // primary : {
                //     background: Colors.primary,
                //     '&:hover' : {
                //         background: lighten(0.05, Colors.primary)

                //     } 
                // },
                // secondary : {
                //     background: Colors.secondary,
                //     '&:hover' : {
                //         background: lighten(0.05, Colors.secondary) 
                //     } 
                // }
            }
        }
     }

})
export default theme;