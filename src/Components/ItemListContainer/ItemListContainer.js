import ItemList from "../itemList/itemList";

const ItemListContainer = (propiedad) => {

    const style = {
        backgroundColor: "blueviolet",
        color: "white",
        margin: '0.5em',
        paddingLeft: 0,
        display: 'flex',
        height: "100px"
      };

    return(
        
        <div style={style}>
            <div>
                <h3 > {propiedad.prop} </h3>
            </div>
            <ItemList/>
        </div>
        
    )
}

export default ItemListContainer