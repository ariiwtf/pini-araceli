import Item from "../item/item"

const ItemList = () => {
    
    const prendas = [
        {
            nombre: "Remera 1",
            precio: 2500,
            foto: '1.jpg',
            id: 1
        },
        {
            nombre: "Remera 2",
            precio: 2800,
            foto: '2.jpg',
            id: 2
        },
        {
            nombre: "Remera 3",
            precio: 3100,
            foto: '3.jpg',
            id: 3
        }
    ]


    return(

        prendas.map( (prendas) => {
            return(
                <div key={prendas.id}>
                    <Item title={prendas.nombre} precio={prendas.precio} id={prendas.id} foto={prendas.foto}></Item>
                </div>
            )
        })
        
        
    )
}

export default ItemList