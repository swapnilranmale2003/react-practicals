import React,{Component} from "react";

class Person extends Component{
    constructor(props){
        super(props);
    }
       render(){
        return(
            <div>
                <h3>Name:{this.props.name}</h3> 
            </div>
        )
    }
}

export default Person;