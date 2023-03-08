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
      <img className="imgW hover:cursor-pointer " src="https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt235efe844da162e1/6077ee03ed7ed32e4a239c8c/6c7a7522998d2337713e844c49c07c01bd388ae0.png?auto=webp&width=1024&disable=upscale" alt="logo mcdo" />
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