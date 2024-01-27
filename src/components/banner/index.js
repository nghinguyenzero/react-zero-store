import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImgage, BannerTitle } from "../../styles/banner";


export default function Banner() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <BannerContainer>
            <BannerImgage src={'/images/banner/banner-luf.png'}/>
            <BannerContent>
                <Typography variant="h6"> Coffee Collection</Typography>
                <BannerTitle variant="h3"> New products </BannerTitle>
                <BannerDescription variant="subtitle">
                    Đây là descriptions của 1 products
                    Đây là descriptions của 1 products
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
}