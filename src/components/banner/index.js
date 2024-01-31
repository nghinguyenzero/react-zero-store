import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImgage, BannerShopButton, BannerTitle } from "../../styles/banner";


export default function Banner() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <BannerContainer>
            <BannerImgage src={'/images/banner/luffy.jpg'}/>
            <BannerContent>
                <Typography variant="h6"> OP Collection</Typography>
                <BannerTitle variant="h3"> New products </BannerTitle>
                <BannerDescription variant="subtitle">
                OP Store - Nơi đắm chìm trong thế giới anime với tượng thạch cao chất lượng cao. Mang về nhà bạn những nhân vật yêu thích từ One Piece với đa dạng sản phẩm độc đáo.
                </BannerDescription>
                <BannerShopButton color="primary">Shop now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}