import React from 'react'
import '../styles/App.css';

class App extends React.Component {
   constructor(){
    super();
    this.state={
      name:"John Doe",
      enrollmentNo: "12345678",
      age: 34 
    }
  }
  render(){
    return(
    <>
      <p>Hello, my name is {name} <h1> and 'I am {age} years old and my enrollment no is {enrollmentNo}<h1></p>
      <button onClick={() => {
            this.setState({
              age: this.state.age + 1,
            });
          }}>Increase age</button>
    </>
    )
  }
}


export default App;
