
import MenuItem from './MenuItem'

function ShoppingList({cart, updateCart}){
    const MenuList = [
        {id : '1', name: "Burger", price: 5, isBestSale : false, manger : 2, prix : 2, cover : 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt5718be23ff804bbe/61d86677d562a95eb8bd4179/cheeseburger.png?auto=webp&width=1024&disable=upscale' },
        {id : '2', name: "Nuggets", price: 9, isBestSale : false, manger : 2, prix : 2, cover : 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt61be2725ce5ab3f0/615db7de0ace7f2ef30e4023/2100.jpg?auto=webp&width=1024&disable=upscale'},
        {id : '3', name: "CBO", price: 11, isBestSale : true, manger : 2, prix : 3, cover : 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt9690f742e9764e1d/6216470a494e504b3ac7704a/CBO.png?auto=webp&width=1024&disable=upscale'},
        {id : '4', name: "Coca bien frais", price: 3, isBestSale : false, manger : 1, prix : 1, cover : 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/bltcc32efe28735ef20/61d863a38adc763cd9e1a83b/6013.jpg?auto=webp&width=1024&disable=upscale'},
        {id : '5', name: "Menu", price: 10 , isBestSale : false, manger : 3, prix : 3, cover : 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt9f3b60ebeab2687f/60cb109580e22b37d43c4089/99000023_Large.jpg?auto=webp&width=1024&disable=upscale'},
        {id : '6', name: "Glace", price: 3, isBestSale : false, manger : 2, prix : 1, cover : 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt360ba7e57001a918/63a46c2ec8903b4f1dc22a9b/McFLURRY_400x400.png?auto=webp&width=1024&disable=upscale'},
        {id : '7', name: "Double Cheese", price: 7, isBestSale : false, manger : 2, prix : 2, cover : 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt235efe844da162e1/6077ee03ed7ed32e4a239c8c/6c7a7522998d2337713e844c49c07c01bd388ae0.png?auto=webp&width=1024&disable=upscale'},
  
      ]

      const categories = MenuList.reduce(
        (acc,menuSingulier) => acc.includes(menuSingulier.category) ? acc : acc.concat(menuSingulier.category),
            []
      )
      function addToCart(name, price) {
		const currentPlantSaved = cart.find((menuSingulier) => menuSingulier.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(menuSingulier) => menuSingulier.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
      
      return (
        <div className="flex flex-col justify-center flex-wrap w-full">
        <ul className="align-center">
            {categories.map((cat)  => (
                <li className='' key={{cat}}>{cat}</li>
            ))}
          
        </ul>
        <ul className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex flex-col justify-items-start" >
            {MenuList.map(({id, cover, name, manger, prix, price})  => (
                <div key={id}>
                    <MenuItem cover={cover} name={name} manger={manger} prix={prix} price={price}/>
                    <button className='button-24' onClick={() => addToCart(name, price)}>Ajouter</button>
                </div>
            ))}
        </ul>
        </div>
      )

}

export default ShoppingList