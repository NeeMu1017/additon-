import React from "react";

class LifeCycel extends React.Component{
    constructor (props){
        console.log("constructor fired");
        super(props);
        this.state ={
            count : 0 ,
            name : "Nirmal"
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDriveStateProps fired");
       return{
        name: "NeeMu"
       }
        // return null;
    }
    componentDidMount(){
           console.log("componentDidMount fired");
    }
   
   render(){
    console.log("render fired")
    return(
        
        <>
        <p>My Name is {this.state.name} </p>
        <p>My Name is {this.state.count} </p>
        </>
    );
   }

   shouldComponentUpdate(){
    console.log("should component update");
    return true;
   }

   
}
export default LifeCycel