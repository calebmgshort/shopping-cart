import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IntegerInput from "./IntegerInput";


function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, setItems] = useState<Record<string, any>[]>([]);
  const [setItemCount] = useOutletContext();
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // TODO: this is not the right way to get it but can't seem to find a better way
    const quantity = Number(event.target[2].value);
    setItemCount((current: number) => current+quantity);
    // alert('added ' + quantity + " items to cart")
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
            .then(res=>res.json())
            .then(items=>setItems(items))
  }, [])

  return (
    <Grid container spacing={2}>
      {items.map(function(item) {
      return (
        <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card>
            <CardMedia
              sx={{ height: 300 }}
              image={item?.image}
              title={item?.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" noWrap={true} >
                {item?.title}
              </Typography>
              <Typography gutterBottom component="div">
                ${item?.price}
              </Typography>
            </CardContent>
            <form onSubmit={handleSubmit}>
              <CardActions>
                <IntegerInput name="quantity"></IntegerInput>
                <Button type="submit" variant="contained" size="small">Add To Cart</Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      )
    })}
    </Grid>
  )
}

export default Home
