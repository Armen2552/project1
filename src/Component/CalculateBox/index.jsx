import React from "react";

class CalculateBox extends React.Component{
    state = {
        tiv: 0,
        inputvalue: 0,
    }

    handleChange = (e)=>{
        this.setState({inputvalue:e.target.value})
        // console.log(this.state.inputvalue)
    }

    Plus = ()=>{
        if(this.state.inputvalue>0) {
            this.setState({tiv: this.state.tiv+(+this.state.inputvalue)})
        }else{
            this.setState({tiv: ++this.state.tiv})
        }
    }
    Minus = ()=>{
        if(this.state.inputvalue>0) {
            this.setState({tiv: this.state.tiv-(+this.state.inputvalue)})
        }else{
            this.setState({tiv: --this.state.tiv})
        }
    }

    render() {
        return <div className='main'>
            <div className="calculator">
                <span onClick={this.Minus}>-</span>
                <div className="area">{this.state.tiv}</div>
                <span onClick={this.Plus}>+</span>
            </div>
            <input type="number" onChange={this.handleChange}/>
        </div>
    }
}

export default CalculateBox