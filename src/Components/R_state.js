import React from "react";
export default class R_state extends React.Component
{
    constructor(props)
    {
        super(props)
        this.x = <h1>Hello user how r u ?</h1>
        this.state = {y:10};
        console.log("Called Constructor")
       // this.display = this.display.bind(this);
    }
   display = (x)=>
   {
       console.log(x)
       console.log("USer u r welcome");
       this.setState({y:90});
   }

   componentDidMount(){
    console.log("Called Did Mount")
   }
   componentDidUpdate(){
    console.log("Called Did Update")
   }
   componentDidCatch(){
    console.log("Called did Catch")
   }
 componentWillUnmount(){
    console.log("Called Will Unmount")

    window.confirm("Are you Sure for Exit ?");
 }
   render()
   {
       return(
           <>
                <h1>value of x = {this.x}</h1>
                <p>{this.state.y}</p>
                <button onClick={()=>this.display(30)}>CLICK</button>
           </>
       )
   }
}