import React from "react";

class CountNumer extends React.Component{
    constructor(){
        super()
        this.state={
            count: 0
        }
        this.handleCkic = this.handleCkic.bind(this);
    }

    handleCkic(){
        this.setState((prevState) =>{
            return{
                count:prevState.count + 1
            }
        });
    }

    render(){
        let {count} =this.state;
        
        return(
            <>
            <p>count valu is {count}</p>
        <button onClick={this.handleCkic}>Incariment NUmber</button>
        
        </>
        );
        
    }
}
export default CountNumer;