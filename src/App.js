import './App.css';
import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';

// functional comp

function App() {
  const [show, setShow] = useState(false)
  const [counterApp, setCounterApp] = useState(0)
useEffect(() => {
  setInterval(() => {setCounterApp(counterApp=>counterApp+1)},1000)
  console.log("did mount and update app");

},[])
  return (
    <div className="App">
      <button onClick={() => setShow(!show)} > show </button>
      {show ? <Counter /> : null}
<h1>{counterApp}</h1>
    </div>



  );
}

export default App;


/*
class App extends Component {
  state = { show: true, counterApp: 0,timerApp:new Date().toLocaleString(),person:{name:"sdcqsd"} }

  componentDidMount() {
    //console.log("component App mounted");
    setInterval(() => {
      this.setState({ 
        counterApp: this.state.counterApp + 1
       });
       this.setState({timerApp:new Date().toLocaleString()})

    }, 1000);
  }
  render() {
    //console.log("render / Rerender")
    return (<div>
      <button onClick={() => this.setState({ show: !this.state.show })} className={!this.state.show?"btnhide":"btnshow"}> {!this.state.show?"hide":"show"} </button>
      {!this.state.show ? <Counter  /> : null}
    </div>);
  }
}

export default App;
*/