import { Dialog, DialogContent, DialogTitle, IconButton, Slide, useMediaQuery, Typography, Button } from "@mui/material";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { Box, styled } from "@mui/system";
import { Product, ProductImage } from "../../styles/products";
import IncDec from "../ui";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";

function SlideTransition(props) {
    return <Slide direction='down' {...props}/>
    
}

const ProductDetailWrapper = styled(Box)(({theme})=>({
    display: 'flex',
     padding: theme.spacing(4)
}))

const ProductDetailInfoWrapper = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5
}))


export default function ProductDetail({open, onClose, product}) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return ( 
    <Dialog
        TransitionComponent={SlideTransition}
        variant='permanat'
        open={open}
        fullScreen
    >
        <DialogTitle sx={{
                background: Colors.secondary
        }}>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
            >
                Product title
                <IconButton onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            </Box>

        </DialogTitle>
        <DialogContent>
            <ProductDetailWrapper
                flexDirection={matches?'column':'row'}
            >
                <Product sx={{mr:4}}>
                    <ProductImage src={product.image}/>
                </Product>
                <ProductDetailInfoWrapper>
                    <Typography variant="subtitle1">SKU:111</Typography>
                    <Typography variant="subtitle1">Available: 5 in stock</Typography>
                    <Typography
                        sx={{lineHeight: 2}} variant='h4'
                    >
                        {product.name}
                    </Typography>
                    <Typography variant="body">
                    {product.description}
                    </Typography>
                    <Box 
                        sx={{
                            mt:4,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <IncDec/>
                        <Button variant="contained">Add to cart</Button>
                    </Box>
                    <Box 
                        display='flex'
                        alignItems='center'
                        sx={{
                            mt: 4, color: Colors.light
                        }}
                    ><FavoriteIcon sx={{mr: 2}}/>
                        Add to wistlist
                    </Box>
                    <Box 
                        sx={{
                            mt: 4, color: Colors.light
                        }}>
                            <FacebookIcon/>
                            <TwitterIcon sx={{pl: theme.spacing(4)}}/>
                            <InstagramIcon sx={{pl: theme.spacing(4)}}/>



                        </Box>
                </ProductDetailInfoWrapper>

            </ProductDetailWrapper>
        </DialogContent>
    </Dialog> );
}
