// function Header(){

//     return (
//       <span className='text-6xl font-medium text-blue-600 hover:text-blue-900 hover:underline pb-5s'>
//         Mcdo du Bled
//         </span>
//     )
//   }s
  
  // function Description(){
  //   return (<p className='text-sm pt-4 pb-5 text-blue-00'>Venez vous cassez vous le bide chez nous </p>)
  // }
  function Img(){
    return(
      <div className="flex justify-end pr-10 pt-5">
      <img className="imgW hover:cursor-pointer " src="https://img1.freepng.fr/20171220/owq/mcdonald-s-logo-png-5a3aaf48d0fe37.8334024615137954008561.jpg" alt="logo mcdo" />
      </div>
    )
  }
  
  function Header(){
    return(
      <span className='font-medium text-yellow-400 hover:text-yellow-600 hover:underline pb-5s text-3xl md:text-4xl  lg:text-6xl hover:cursor-pointer'>      

        Mcdo React 
      </span>
    )
  }

  function Banner(){
    return(
      <div className="">
      <Img/>
      <Header/>
      </div>


    )
  }

  export default Banner