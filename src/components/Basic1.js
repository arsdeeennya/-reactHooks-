import React, {useState} from "react"

const Basic1 = () => {
	const [product, setProducts] = useState({name: "", price: ""})
	
	return (
		<React.Fragment>
			<form>
				<input type="text" value={product.name} onChange={evt => setProducts({...product, name:evt.target.value})}/>
				<input type="text" value={product.price} onChange={evt => setProducts({...product, price:evt.target.value})}/>
			</form>
			<h3>{product.name}</h3>
			<h3>{product.price}</h3>
		</React.Fragment>
	)
}

export default Basic1;