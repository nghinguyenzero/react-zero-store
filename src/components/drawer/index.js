import { Divider, Drawer, List, ListItemButton, ListItemText, lighten } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { DrawerCloseButton } from "../../styles/appbar";

import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";

const MiddleDivider = styled((props)=>(
    <Divider variant="middle" {...props}/>

))``;

export default function AppDrawer() {
    const {drawerOpen, setDrawerOpen} = useState(true)

    return (
    <>
        { drawerOpen && (
        <DrawerCloseButton onClick={()=>setDrawerOpen(false)}> 
            <CloseIcon
                sx={{
                    fontSize: '2.5rem',
                    color: lighten(Colors.secondary, 0.09)
                }}
            />
        </DrawerCloseButton>
        )}
        <Drawer open={drawerOpen}>
            <List>
                <ListItemButton>
                    <ListItemText>🌻</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>Categories</ListItemText>
                </ListItemButton>  
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>Products</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>About us</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>Contact us</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
            </List>
        </Drawer>
    </>
    );
}