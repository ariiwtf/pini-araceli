import { Button } from "@mui/material"
import { useState } from "react"

const ItemCount = () => {

    //variable de estilo
    const style = {
        backgroundColor: "white",
        color: "blueviolet",
        border: "solid blueviolet 1px", 
        width: "300px"
      };

    //set del useState para controlar los estados
    const [quantity, setQuantity] = useState(0)
    const [stock, setStock] = useState (7)
   
    //funcion para añadir cantidad
    function onAdd(){
        setQuantity (quantity +1)
        setStock (stock -1)
    }

    //funcion para remover cantidad
    function onRemove(){
        setQuantity (quantity -1)
        setStock (stock +1)
    }

    return(
        
        <div  style={style}>
            <h3>Producto</h3>
            <span>Cantidad: {stock}</span>
            <br></br>
            <Button onClick={ () => {onRemove()}} disabled={quantity == 0}>-</Button>
            <span>{quantity}</span>
            <Button onClick={ () => {onAdd()}} disabled={stock == 0}>+</Button>
            <br></br>
            <Button>Añadir al carrito</Button>
        </div>
    )
}

export default ItemCount