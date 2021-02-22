import React, {useState} from "react"

const Basic2 = () => {
	const [product, setProduct] = useState([])
	const newProduct = () => {
		setProduct([...product, {id: product.length, name: "Hello React"}])
	}
	
	return (
		<React.Fragment>
			<button onClick={newProduct}>New Product</button>
			<ul>
				{product.map(product => (
					<li key={product.id}>{product.name} id: {product.id}</li>
				))}
			</ul>
		</React.Fragment>
	)
}

export default Basic2;