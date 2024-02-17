import { DialogContent, DialogTitle, IconButton, Box, Dialog, TextField, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { firebasedb } from "../firebase/db";
// import { Box, styled } from "@mui/system";

export default function Login({open, onClose}) {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })
    const [joinUs, setJoinUs] = useState(false)

                        
    const handleJoinUsSubmit = async (event) => {
        event.preventDefault()
        console.log({form});

        try {
            await firebasedb.register({...form})
        } catch (error) {
            console.log({error});
        }
    }
    

    const handleLoginSubmit = async (event) => {
        event.preventDefault()
        try {
            await firebasedb.login({...form})
        } catch (error) {
            console.log({error});
        }
    }
     const hanldeSetFormField =( value, field)=>{
        setForm({...form, [field]: value})
     }
    return(
        <Dialog open={open}>
            <DialogTitle>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
            >
                Login
                <IconButton onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            </Box>
            </DialogTitle>
            <DialogContent>
                { joinUs ? (
                    <Box 
                        display={'flex'} flexDirection={'column'}
                        sx={{width: '100%'}}
                    >
                        <form onSubmit={handleJoinUsSubmit}>
                            <TextField
                                label='First name'
                                value={form.firstname}
                                onChange={(event)=>hanldeSetFormField( event.target.value, 'firstname')}
                            variant="standard"
                            sx={{mb:2}}
                            fullWidth
                            />                   
                            <TextField
                                label='Last name'
                                value={form.lastname}
                                onChange={(event)=>hanldeSetFormField( event.target.value, 'lastname')}
                            variant="standard"
                            sx={{mb:2}}
                            fullWidth
                            />
                            <TextField
                                label='Email'
                                value={form.email}
                                onChange={(event)=>hanldeSetFormField( event.target.value, 'email')}
                            variant="standard"
                            sx={{mb:2}}
                            fullWidth
                            />                    
                            <TextField
                                label='Password'
                                value={form.password}
                                onChange={(event)=>hanldeSetFormField( event.target.value, 'password')}
                            type="password"
                            variant="standard"
                            sx={{mb:2}}
                            fullWidth
                            />
                            <Button fullWidth type="submit" variant="contained">Sign up</Button>
                        </form>
                        <Box sx={{mt:2}} textAlign={'center'}>
                            <Typography variant="caption">
                            Don't have an account? {'  '}
                            <Button onClick={()=> setJoinUs(false)}>Login</Button>
                            </Typography>
                        </Box>
                    </Box>
                ) : (
                    <Box 
                        display={'flex'} flexDirection={'column'}
                        sx={{width: '100%'}}
                    >
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                label='Email'
                                variant="standard"
                                sx={{mb:2}}
                                fullWidth
                                value={form.email}
                                onChange={(event)=>hanldeSetFormField( event.target.value, 'email')}
                            />                    
                            <TextField
                                label='Password'
                                type="password"
                                variant="standard"
                                sx={{mb:2}}
                                fullWidth
                                value={form.password}
                                onChange={(event)=>hanldeSetFormField( event.target.value, 'password')}
                            />
                            <Button fullWidth type="submit" variant="contained">Login</Button>
                        </form>
                        <Box sx={{mt:2}} textAlign={'center'}>
                            <Typography variant="caption">
                            Have an account? {'  '}
                            <Button onClick={()=> setJoinUs(true)}>Sign up</Button>
                            </Typography>
                        </Box>
                    </Box>
                )}

            </DialogContent>

        </Dialog>
    )
}