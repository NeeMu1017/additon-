import React from "react";
class Argument extends React.Component{
    constructor (props){
        super(props)
        this.state={
            name: "Nimal",
            age : 25
        }
    }
    render(){
        return(
            <>
        <h3>My name is {this.state.name} , i am {this.state.age}  year old , i am study in {this.props.study} </h3>
        </>
        );
        
    }
}

export default Argument