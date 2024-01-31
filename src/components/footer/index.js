import { Box, Grid, ListItemText, Stack, Typography, List, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

import { Colors } from "../../styles/theme";
import { FooterTitle, SubcribeTf } from "../../styles/footer";


function Footer() {
    return ( 
        <Box 
            sx={{
                    background: Colors.shaft,
                    color: Colors.white,
                    p: { xs: 4 , md: 10},
                    pt: 12,
                    pb: 12,
                    fontSize: {xs: '12px', md: '14px' }

            }}
        >
            <Grid container spacing={2} justifyContent='center'>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About us</FooterTitle>
                    <Typography variant='caption2'> 
                        Lorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                        Lorem Lorem Lorem Lorem Lorem
                    </Typography>
                    <Box
                        sx={{
                            mt: 4,              
                            color: Colors.dove_gray
                        }}
                    >
                        <FacebookIcon sx={{ mr: 1}}/>
                        <TwitterIcon sx={{ mr: 1}}/>
                        <InstagramIcon sx={{ mr: 1}}/>
                    </Box>

                </Grid>
                <Grid  item md={6} lg={2}>
                    <FooterTitle variant="body1">Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Orther tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privary &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>

                </Grid>
                <Grid  item md={6} lg={2}>
                    <FooterTitle variant="body1">My account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My cart
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid  item md={6} lg={4}>
                    <FooterTitle variant="body1">newsletter</FooterTitle>
                    <Stack>
                        <SubcribeTf
                         color="primary"
                         label='Email adress'
                         variant="standard"
                         />
                        <Button 
                            startIcon={<SendIcon sx={{color: Colors.white}}></SendIcon>}
                            sx={{mt: 4, mb: 4}}
                            variant="contained"
                        >
                            Subcribe
                        </Button>

                    </Stack>
                </Grid>

            </Grid>
        </Box>
     );
}

export default Footer;