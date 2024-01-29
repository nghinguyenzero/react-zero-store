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


function SingleProductDesktop({product, matches}) {
    const [showOptions, setShowOptions] = useState(true)
    const handleMouseEnter = () => {

    }
    const handleMouseLeave = () => {

    }
    return (
        <>
            <Product 
                onMouseEnter={handleMouseEnter}
                onmouseleave={handleMouseLeave}
            >
                <ProductImage src={product.image}></ProductImage>
                <ProductFavButton isFav={0}>
                    <FavoriteIcon/>
                </ProductFavButton>
                    {showOptions && (
                        <ProductAddCart show={showOptions} variant="outline">
                            Add to cart
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
                        <ProductActionButton>
                            <FitScreenIcon color="primary"/>
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product} matches={matches}/>
        </>
    );
}

export default SingleProductDesktop;