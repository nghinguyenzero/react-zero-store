import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {  AppbarContainer, AppbarHeader, Mylist } from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search'
import Actions from "./actions";

export default function AppbarDesktop({matches}) {

    return (
            <AppbarContainer>
                <AppbarHeader> OP Store</AppbarHeader>
                <Mylist type='row'>
                    <ListItemText primary='Home'/>
                    <ListItemText primary='Categories'/>
                    <ListItemText primary='Products'/>
                    <ListItemText primary='Contact us'/>
                    <ListItemButton>
                        <ListItemIcon>
                            <SearchIcon/>
                        </ListItemIcon>
                    </ListItemButton>

                </Mylist>
                <Actions matches={matches}/>
                <Actions/>
            </AppbarContainer>
    )
}
