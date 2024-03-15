import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImgage, BannerShopButton, BannerTitle } from "../../styles/banner";


export default function Banner() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <BannerContainer>
            <BannerImgage src={'/images/banner/luffyg5.png'}/>
            <BannerContent>
                <Typography variant="h6"> New Collection</Typography>
                <BannerTitle variant="h3">One piece </BannerTitle>
                <BannerDescription variant="subtitle">
                🌻 Store - Nơi nơi bạn có thể tìm thấy những sản phẩm độc đáo và phong phú để thể hiện đam mê của mình. chúng tôi cam kết mang lại trải nghiệm mua sắm tuyệt vời nhất cho các khách hàng
                </BannerDescription>
                <BannerShopButton color="primary">🛍️ Shop now </BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}