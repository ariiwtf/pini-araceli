import Button from '@mui/material/Button';
import ItemCount from "../itemCount/itemCount.js"


const Item = ({title, precio, id, foto}) => {

    const style = {
        border: "solid 1px blueviolet",
        color: "black",
        margin: '2em',
        marginTop: '30%',
        width: "300px"
      };

    return(
        <div>
            <div style={style}>
                <h3>Producto:  {title}</h3>
                <span>ID: {id}</span>
                <br></br>
                <img src={foto} style={{width: '280px'}}></img>
                
                <br></br>
                <span>Precio ${precio}</span>
                <hr></hr>
                <Button style={{color:'blueviolet', width:'300px'}}>Ver detalle</Button>
                <ItemCount/>
            </div>
            
        </div>
    )
}

export default Item