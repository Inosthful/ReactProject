import { useState } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'





function App() {
	const [cart, updateCart] = useState([])
	
	return (
		<div>
		<div className='flex flex-row justify-end'>
			<Banner />
			</div>
			<div className='flex flex-row mt-16 w-full'>
				<hr />
			<Cart cart={cart} updateCart={updateCart}/>
			<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
			</div>


	)
}




export default App
