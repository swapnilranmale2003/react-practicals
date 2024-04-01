import React,{Component} from "react";

class Person extends Component{
    constructor(props){
        super(props);
        this.state={
            num:0
        }
    }
       render(){
        if(this.state.num==5){
            throw new Error("My custom error");
        }
        const handleClick = ()=>{
            this.setState({num:this.state.num+1})
        }
        return(
            <div>
                {/* <h3>Name:{this.props.name}</h3>  */}
                <h1>{this.state.num}</h1>
                <button onClick={handleClick}>Increment</button>
            </div>
        )
    }
}

export default Person;