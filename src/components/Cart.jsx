
import { useState } from "react"

function Cart({cart, updateCart}){
  const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
    return(

        <div className='flex flex-col justify-start p-5 border koo '>
          <span className='lg:text-2xl text-xl font-bold text3 hover:text-gray-400 hover:underline hover:cursor-pointer'>Panier : </span>
          <ul className='pt-7 text'>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>

					<h3 className="pt-5 pb-5 text2">Total :{total}€</h3>
					<button className="button-40 text3" onClick={() => updateCart([])}>Vider le panier</button>
            </div>
         

      
    )}

export default Cart