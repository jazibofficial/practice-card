// function App(){
//    function myFunction(){
//       alert("heloo")
//    }
//   return(
//     <>

import { useState } from "react"

    
//     <h1>HTML DOM Events</h1>
// <h2>The onclick  jazib Event</h2>

// <p>The onclick event triggers a function when an element is clicked on.</p>
// <p>Click to trigger a function that will output "Hello World":</p>

// <button  onClick={myFunction}>  click done me  jazib  </button> 
//     </>
//   )
// }
// // 3change
// //onclik="myfuction()"
// //onclik= {myfunction()}
// //onclik={myfunction}
// //camel case use onClick 
// export default App;

//   <button onClick={()=> alert("jazib web developer")}> clik </button>
 

// function App(){

//   const sumbit = ()=> alert("hy who are you ")
//   return(
//     <>
//     <button onClick={sumbit}> submission </button>
    
//     </>
//   )
// }

// export default App;

// parametrs pass methd to make other function
// function App(){

//   const sumbit = (name)=> alert("hy who are you "+name)
 
//   const temp= ()=>{
//     sumbit("jazib")
//   }
//   return(
//     <>
//     <button onClick={temp}> submission </button>
    
//     </>
//   )
// }
// export default App;
// anthor methode to use paramets we use arrow function  in onclik
// function App(){

//   const sumbit = (name)=> alert("hy who are you "+name)
 

//   return(
//     <>
//     <button onClick={()=>sumbit("saneha")}> submission </button>
    
//     </>
//   )
// }
//  export default App;

// use double arrow functions in cont 
// function App(){

//   const sumbit = (name)=> ()=> alert("hy who are you "+name)
 

//   return(
//     <>
//     <button onClick={sumbit("saneha")}> submission </button>
    
//     </>
//   )
// }
//  export default App;

// function App(){
  
//   let counter=100


    
//    const Increment=()=>{
   
//     counter=counter+1
//     console.log(counter)

//    }

//    const Decrement=()=>{
//     counter=counter-1
//     console.log(counter)

//    }

//   return(
//     <>
//     <h1>counter={counter}</h1>
//     <button onClick={Increment}>+</button>
//     <button onClick={Decrement}>-</button> 
    
//     </>
//   )
// }

// export default App;


// function App(){
  
//   let [counter,seterCard]= useState(0) //state variable                 


    
//    const Increment=()=>{

    
//     seterCard(counter+1) 
  


//    }



//    const Decrement=()=>{

//     if( counter>0){
//       seterCard(counter-1) 

//     }
        

//    }

//   return(
//     <>
//     <h1>counter={counter}</h1>
//     <button onClick={Increment}>+</button>
//     <button onClick={Decrement}>-</button> 
    
//     </>
//   )
// }

// export default App;


// function App(){

//   let [kfc,seterFunction]= useState(0)
   

//  const Increment= ()=>{
//        seterFunction(kfc+1)
      
//  }

//  const Decrement=()=>{
//   if(kfc>0){
//     seterFunction(kfc-1)
//   }

//  }
      

//   return(
//     <>
// <button onClick={Increment}>+</button>


// <h1>kfc={kfc}</h1>


// <button onClick={Decrement}>-</button> 
//     </>
//   )
// }

// export default App;

// function App(){

//   let [kfc,seterFunction]= useState(0)
   

 
      

//   return(
//     <>
// <button onClick={ ()=> seterFunction(kfc+1)}>+</button>


// <h1 style={{color:  kfc>0 ? "gree":"red"}}>kfc={kfc}</h1>


// <button   

// disabled={kfc>0 ? false:true } onClick={()=>  kfc>0 &&  seterFunction(kfc-1)     }>-</button> 
//     </>
//   )
// }

// export default App;


// function App(){

// const [city,seterFunction]=   useState ("lahore");

// const upper=()=>{
//   seterFunction(city.toUpperCase())
// }
//   return(
//     <>

//     <h1 style={{color:  city.upper ? "red": "green"}}>City name={city}</h1>
//     <button  onClick={upper} > change to uppercase </button>

//     </>
//   )
// }

// export default App;


// function App(){



//   const [a,seterCard]= ()=>
//   useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet temporibus amet, earum libero, dolor accusantium aperiam neque modi, voluptate debitis ipsam illum. Aliquid eligendi sunt ad enim voluptatibus reiciendis exercitationem.")
// cons

//   return(
//     <>

//     <button onClick={()=>seterCard}>Add</button>
    

//     </>
//   )
// }
// export default App;



  function App(){
    
    let [card,seterCard]=  useState(0)
    
    const Increment=()=>{
      seterCard(card+1)
     
    }

    const Decrement=()=>{
      seterCard(card-1)
    }
 

    let price=()=>500
    price=card*500
     
    return(

<>
<div className="card" style={{width: '18rem',color: '#fff', background:'#1c1816 ', flex:'0 0 auto ',fontsize:'100px'}}>
  <img src="https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-krunch_variant_0-2023-05-31115706.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    {<h5 className="card-title"  >
  
      Zinger Stacker</h5>}
    <p className="card-text"   > Double krunch fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese sauce- sandwiched between a sesame seed bun   </p>


    <button     style={{    border: '1px solid #ea002a ',
    margininline: '10px',
    marginbottom: '10px',
    fontSize:'9px',
    background:'transparent',
    color:'#fff',
    display:'flex',
    justifyContent:'center',
    marginLeft:'70px',  
    

                       }}  type="button"   onClick={Increment} >+</button>
    <button type="button" 
   style={{    border: '1px solid #ea002a ',
   margininline: '10px',
   marginbottom: '10px',
   fontSize:'10px',
   background:'transparent',
   color:'#fff',
   display:'flex',
   justifyContent:'center', 
  marginLeft:'70px',
 
                      }} 
    disabled ={ card>0 ?  false:true   }   onClick={Decrement}>-</button>
  
   
    <h5> ...............  {card}</h5>
    
   

    <a className="motal-cart-btn" href="/menu"  style={{backgroundColor:'#e4002b',
    borderRadius:'7px',
    color:'#fff',  fontFamily:'var(--regular-font)',
     justifyContent:'space-between',
       margin:'0 atuo',
       padding:'5px',
       fontsize: '10px',               
      
         }}><span> price={price}</span><span>Add to Bucket</span><i class="ri-arrow-right-s-line errow-line"></i></a>
   

     


  </div>
</div>

 </>
    )
  }

  export default App;



