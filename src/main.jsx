import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './styles/style.css'

// import App from './components/App.jsx'

// Pour créer un composant un composant react sans JSX
// console.log(helloWorld);

//avec JSX
// const helloWorld2 = <h1>Bonjour le foot</h1>


// //composant dans une fonction, à noter on l'appelle avec la syntaxe <Component />
// // const HelloWorld3 = function(){
// //     return  <h1>Bonjour le foot</h1>
// // }
// const HelloWorld3 = (props) => <h1>{props.content}</h1>

// // console.log(HelloWorld3())

// const Produits = (props) => <div>
//     <h2>{props.details.name}</h2>
//     <span>{props.details.price}</span>
// </div>



// //   date: new Date(),
// const Products = () => {
//   [
//       {id : 1, name: "Burger", price: 5.95},
//       {id : 2, name: "Nuggets", price: 9.10},
//       {id : 3, name: "CBO", price: 12.10},
//       {id : 4, name: "Coca bien frais", price: 3.49}
//   ];
// }

//         const listProducts = () => {this.state.Products.map((Produit, index) => 
//         <Produits key={index} details={Produit} />
//         )
//         return (
//             <div>
//             {element}
//             {listProducts} 
//             </div>
//             ) 

//         }
//On rend l'élément dans le DOM via la méthode render()
// ReactDOM.render(
//     <App2/>,
//     document.querySelector('#root')


// )





console.log('Hello world')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

