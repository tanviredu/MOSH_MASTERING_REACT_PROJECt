import React, {Component} from 'react';
import './App.css';
import Book from "./components/Book";

// this is function based component


// function App() {
//   return (
//     <div className="App">
//       <h1 className="display-4">
//         This is the main Component
//       </h1>
//       <Person />
//       <Person />
//     </div>
//   );
// }


// this is clas based component

class App extends Component{
    // lets see whats indie the component
    // here we add a state
    state = {
      books : [
        {bookname:"1984",writer:"gefroy hinton"},
        {bookname:"harry potter",writer:"JK Rowling"},
        {bookname:"alcemist",writer:"Paolo koleho"},
        {bookname:"Pet cymettry",writer:"stiphen king"},
        {bookname:"IT",writer:"stiphen king"},
      ]
    } // hold the iformation

    changeBookState = ()=>{
      console.log("Button Clicked");
      // change the state with 
      //setstate
      // chnage the stae with onclick
      
      this.setState({
        books : [
          {bookname:"Changed 1984",writer:"Changed gefroy hinton"},
          {bookname:"Changed harry potter",writer:"Changed JK Rowling"},
          
        ]
      });
    }
  render(){
    console.log(this.state)
    return(
      <div className="App">
      <h1 className="display-1">
              Book Lists
      </h1>
      <button className="btn btn-danger" onClick={this.changeBookState}>change State</button>
              <hr></hr>
              <Book bookname={this.state.books[0].bookname} writer={this.state.books[0].writer} />
              <Book bookname={this.state.books[1].bookname} writer={this.state.books[1].writer} />
              
      
    </div>
    );
  }
}

export default App;
