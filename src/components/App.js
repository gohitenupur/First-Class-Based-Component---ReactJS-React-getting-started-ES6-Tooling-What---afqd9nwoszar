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
      <p>Hello, my name is <h1> {name} </h1> and 'I am <h1>{age}</h1> years old and my enrollment no is <h1>{enrollmentNo}</h1></p>
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
