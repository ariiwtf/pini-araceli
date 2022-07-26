import { textAlign } from "@mui/system";

const ItemListContainer = (propiedad) => {

    const style = {
        backgroundColor: "blueviolet",
        color: "white",
        margin: '0.5em',
        paddingLeft: 0,
        height: "100px"
      };

    return(
        
        <div style={style}>
            <h3> {propiedad.prop} </h3>
        </div>
        
    )
}

export default ItemListContainer