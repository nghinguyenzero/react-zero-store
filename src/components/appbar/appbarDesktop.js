import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

import {  AppbarContainer, AppbarHeader, Mylist } from "../../styles/appbar";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({matches}) {
    const { setShowSearchBox} = useUIContext()

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
                            <SearchIcon onClick={()=>setShowSearchBox(true)}/>
                        </ListItemIcon>
                    </ListItemButton>
                </Mylist>
                <Actions matches={matches}/>
            </AppbarContainer>
    )
}
