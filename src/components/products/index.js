import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { products } from "../../data";

function Products(props) {

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    renderProducts = products.map( product => (
        <Grid
         item  key={product.id} display='flex' flexDirection={'column'} alignItems={'center'}
        ></Grid>
    ))
    return (
<Container>
    <Grid container justifyContent={'center'}
        sx={{
            margin: '20px 4px 10px 4px'
        }}
    >
        {renderProducts}
    </Grid>
</Container>
    );
}

export default Products;