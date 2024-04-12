import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';

// import { Link } from "react-router-dom";

function Navbar({itemCount=0}) {

  return (
    <AppBar>
      <Toolbar>
        <Button sx={{ color: '#fff' }} component={Link} to="/">
          Home
        </Button>
        <Button sx={{ color: '#fff' }} component={Link} to="/shop">
          Shop
        </Button>
        <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
        <Box>
          <Typography textAlign="center" variant="h6" component="div">
            {itemCount}
          </Typography>
          <ShoppingCartIcon></ShoppingCartIcon>
        </Box>
        <Button color="inherit">Check Out</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
