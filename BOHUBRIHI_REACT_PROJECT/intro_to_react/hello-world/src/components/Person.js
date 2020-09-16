import React, {Component} from 'react'
import "./Person.css"

// this is a function based component

// function Person(){
//   return(
//     <div>
//       <h1> This is a child Component </h1>
//     </div>
//     );
// }


// this is a component with the arrow function
// ununsed components will throw an error
// var Person2 = ()=>{
//   return(
//     <div>
//       <h1> This is a child Component </h1>
//     </div>
//   );
// }

// Data is passing through the props
// from the main component through child component
// var Person = (props)=>{
//   console.log(props);
//   return ( 
//     <div className="Person">
//       <div className="jumbotron">
//           <h1 className="display-4"> Name : {props.name} </h1>
//           <p className="h4">  Age  : {props.age} </p>
//       </div>
//     </div> 

//   )
// }


// in the class the peops will be a property
// in the component
// in order to get the peops
// you need to call the super method
// to get the peops properties


class Person extends Component{
  
  // in order to use the props
  // you have to called the super method inside the 
  // the constrtor
  constructor(props){
    super(props);
  }
  render(){
    // console.log(this.props);
    return (
    <div className="Person">
      <div className="jumbotron">
          <h1 className="display-4"> Name : {this.props.name} </h1>
          <p className="h4">  Age  : {this.props.age} </p>
      </div>
    </div> 
)
    
  }
}


// now chaing the person component with the class component
// will render the same thing with person2



export default Person;