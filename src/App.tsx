import "./App.css";
import { useState }from "react";
import { useQuery } from 'react-query';
import { Container, Drawer, LinearProgress, Grid, Box, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { AddShoppingCart } from "@material-ui/icons";
import Item from "./components/Item";

// custom styles
import { Wrapper, StyledButton } from './App.styles';

/**
 * Function for defining material UI styles
 *
 * @params theme
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2)
    }
  })
);
// thos is an interface
// defining types of the structure to be retured
export type CartItemType = {
  id: number,
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

// define api call
const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();


/**
 * Function to initiate react application.
 */
function App() {
  const classes = useStyles();

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', getProducts
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((previousValue: number, item) => previousValue + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress/>
  if (error) return <div>Some went wrong</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        Cart goes here
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
