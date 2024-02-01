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
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDetail";


function SingleProduct({product, matches}) {
    const [ProductDetailDialog, showProductDetailDialog, 
        // closeProductDetailDialog
    ] = useDialogModal(ProductDetail)
    return (
        <>
            <Product>
                <ProductImage src={product.image}></ProductImage>
                <ProductMeta product={product} matches={matches}> </ProductMeta>
                <ProductActionsWrapper product={product} matches={matches}>
                    <Stack direction='row'>
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
            <ProductAddCart variant="contained"> Add to cart</ProductAddCart>
            <ProductDetailDialog product={product}/>
        </>
    );
}

export default SingleProduct;