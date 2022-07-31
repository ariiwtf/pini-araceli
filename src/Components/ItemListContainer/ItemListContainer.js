import ItemCount from "../itemCount/itemCount";

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
            <div>
                <h3> {propiedad.prop} </h3>
            </div>
            <ItemCount/>
        </div>
        
    )
}

export default ItemListContainer