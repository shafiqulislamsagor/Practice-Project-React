const Single = ({ product }) => {
    console.log(product)
    return (
        <div>
            <h1>{product.id} . {product.title}</h1>
            <img src={product.image} alt="" />
        </div>
    )
}


export default Single;