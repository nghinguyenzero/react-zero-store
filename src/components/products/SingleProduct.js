import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper, ProductAddCart, ProductFavButton, ProductImage } from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";


function SingleProduct({product, matches}) {
    return (
        <>
            <Product>
                <ProductImage src={product.image}></ProductImage>
                <ProductMeta product={product} matches={matches}> </ProductMeta>
                <ProductActionWrapper>
                    <Stack direction='column'>
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon></FavoriteIcon>
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color="primary"></ShareIcon>
                        </ProductActionButton>
                    </Stack>
                </ProductActionWrapper>
            </Product>
            <ProductAddCart variant="contained"> Add to cart</ProductAddCart>
        </>
    );
}

export default SingleProduct;