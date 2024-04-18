import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEr76xzPst0gI_xDHNVj_Jyzabd_z6CTY_ew&s" 
        style={{
          opacity: 0.6,
          position: "absolute",
          left: 0,
          top: 0,
          width: "auto",
          height: "100%",
          zIndex: -1
        }}
      />
      <Box>
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
        }}>
          <Typography data-testid="welcome" variant="h2" >
            Welcome!
          </Typography>
          <Button variant="contained" component={Link} to="/shop">
            <Typography variant="h5">
              Shop
            </Typography>
          </Button>
        </Container>
      </Box>
    </>
  )
}

export default Home
