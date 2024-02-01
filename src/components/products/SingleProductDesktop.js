import { useState } from "react";

import { Stack } from "@mui/material";
import { 
    Product, ProductActionButton, 
    ProductActionsWrapper, ProductAddCart, 
    ProductFavButton, ProductImage 
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ProductDetail from "../productDetail";
import useDialogModal from "../../hooks/useDialogModal";
import useCart from "../../hooks/useCart";


function SingleProductDesktop({product, matches}) {
    const [
        ProductDetailDialog,
        //  closeProductDetailDialog,
        showProductDetailDialog, 
        ] = useDialogModal(ProductDetail)

    const [showOptions, setShowOptions] = useState(false)

    const {addToCart, addToCartText} = useCart(product)
    const handleMouseEnter = () => {
        setShowOptions(true)
    }
    const handleMouseLeave = () => {
        setShowOptions(false)
    }
    return (
        <>
            <Product 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ProductImage src={product.image}/>
                <ProductFavButton isFav={0}>
                    <FavoriteIcon/>
                </ProductFavButton>

                {showOptions && (
                    <ProductAddCart 
                        show={showOptions} variant="outlined"
                        onClick={addToCart}
                    >
                        {addToCartText}
                    </ProductAddCart>
                )}

                <ProductActionsWrapper show={showOptions}>
                    <Stack direction='column'>
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon/>
                        </ProductFavButton> 
                        <ProductActionButton>
                            <ShareIcon color="primary"/>
                        </ProductActionButton>
                        <ProductActionButton onClick={()=>showProductDetailDialog()}>
                            <FitScreenIcon color="primary"/>
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product} matches={matches}/>
            <ProductDetailDialog product={product}/>
        </>
    );
}

export default SingleProductDesktop;