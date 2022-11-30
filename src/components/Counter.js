import React, { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [texte, setTexte] = useState("")
    const [textef, setTextef] = useState("")
    useEffect(() => {
        console.log("counter mounted");

        return () => {
            console.log("counter unmounted");
        }
    }, [])
    const handelClick = (e) => {setTexte(e.target.value) }
    const handelClickf =()=>{setTextef(texte)}

    return (
        <div style={{ backgroundColor: "yellow", width: "400px", display: "flex", justifyContent: "center" }}>
            <div>
                <input onChange={handelClick} type="text" placeholder="add value" />
                <button onClick={handelClickf}>add</button>
                <div style={{ display: "flex" }}>
                    <button onClick={() => setCount(count + 1)}>+</button>
                    <p>{count}</p>
                    <button onClick={() => setCount(count - 1)}>-</button>
                </div>
                <h1>{textef}</h1>
                <button onClick={() => setCount(0)}>reset</button>
            </div>
        </div>)
}

export default Counter

/*
class Counter extends Component {
    constructor(props) {
        super(props);
        //this.increment=this.increment.bind(this)
    }
    state = { counterCount: 0, count: 0, inp: 0 }
    componentDidMount() {
        console.log("component Counter mounted");
        this.id = setInterval(() => {
            this.setState({ counterCount: this.state.counterCount + 1 })
        }, 1000);
    }

    componentWillUnmount() {
        console.log("component Counter unmounted")
        clearInterval(this.id)
    }
    increment = () => {
        console.log(this)
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        console.log(this)
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    reset = () => {
        this.setState({ count: 0 })
    }
    handleClick = () => {
        this.setState({ count: +this.state.inp })
        this.setState({ inp: "" })
    }
    render() {
        return (
            <div style={{ backgroundColor: "yellow", width: "400px", display: "flex", justifyContent: "center" }}>
                <div>
                    <input value={this.state.inp} type="number" placeholder="add value" onChange={(e) => this.setState({ inp: e.target.value })} />
                    <button onClick={this.handleClick} >add</button>
                    <div style={{ display: "flex" }}>
                        <button onClick={this.increment}>+</button>
                        <p>{this.state.count}</p>
                        <button onClick={this.decrement}>-</button>
                    </div>
                    <button onClick={this.reset}>reset</button>
                </div>
            </div>);
    }
}

export default Counter;

*/