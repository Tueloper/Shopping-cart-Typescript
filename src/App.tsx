import "./App.css";
import { useState }from "react";
import { useQuery } from 'react-query';
import { Drawer, LinearProgress, Grid } from "@material-ui/core";
// import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { AddShoppingCart } from "@material-ui/icons";
import Item from "./components/Item";
import Cart from "./components/Cart";

// custom styles
import { Wrapper, StyledButton } from './App.styles';

/**
 * Function for defining material UI styles
 *
 * @params theme
 */
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       margin: theme.spacing(2)
//     }
//   })
// );
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
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products', getProducts
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((previousValue: number, item) => previousValue + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    // ways of set data to state
    setCartItems(prev => {
      // does item exist
      const isExist = prev.find(item => item.id === clickedItem.id);

      // if it exist
      if (isExist) {
        return prev.map(item =>
          item.id === clickedItem.id 
            ? { ...item, amount: item.amount + 1}
            : item
        );
      }

      // first time we are adding item to cart
      return [ ...prev, { ...clickedItem, amount: 1 }];
    })
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((ackArray, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ackArray;
          return [...ackArray, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ackArray, item];
        }
      }, [] as CartItemType[])
    ))
  };

  if (isLoading) return <LinearProgress/>
  if (error) return <div>Some went wrong</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartCarts={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
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
