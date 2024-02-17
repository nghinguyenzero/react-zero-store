import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
import { firebasedb } from "../firebase/db";
import Login from "../login";
import useDialogModal from '../../hooks/useDialogModal'

export default function Appbar(params) {
    const theme = useTheme()
    const [ LoginDialog, setShowLoginDialog] = useDialogModal(Login)
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const handleLogin = () => {
        setShowLoginDialog()
        // firebasedb.login()
    }
    const handleLogout = async() => {
        try {
            await firebasedb.logout()
            
        } catch (error) {
            console.log({error});
            
        }
    }
    return (<>
        {
            (matches )
            ? <AppbarMobile 
                matches={matches}
                onLoginClick={handleLogin}
                onLogoutClick={handleLogout}
                /> 
            : <AppbarDesktop 
                matches={matches}
                onLoginClick={handleLogin}
                onLogoutClick={handleLogout}
            />
        }
        <LoginDialog/>
    </>)
    
} 