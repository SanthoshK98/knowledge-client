import { AppBar, Button, IconButton, Typography, Toolbar, Stack} from '@mui/material';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' color='inherit' edge='start' aria-label='logo'>
                <Diversity1Icon/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                FamilyCart
            </Typography>
            <Stack direction='row' spacing={2} sx={{
                color:'#eeeee'
            }}>
                <Link to='/' state={{user:"Hello"}}><Button color='inherit'>Home</Button></Link>
                <Link to='/cart'><Button color='inherit'>Cart</Button></Link>
                <Link to='/myorders'><Button color='inherit'>MyOrders</Button></Link>
                <Link to='/login'><Button color='inherit'>Login</Button></Link>
                <Link to='/signup'><Button color='inherit'>SignUp</Button></Link>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
