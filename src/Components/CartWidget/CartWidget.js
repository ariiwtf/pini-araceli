import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    const style = {
                 color: "white",
                 position: 'absolute',
               };
    return(
         <ShoppingCartIcon style={style}/>
        
    )
}

export default CartWidget

// import { BsFillCartFill } from "react-icons/bs";

// const CartWidget = () => {

//     const style = {
//         color: "white",
//         position: 'absolute',
//       };

//     return(
//          <BsFillCartFill style={style}/>
        
//     )
// }

// export default CartWidget