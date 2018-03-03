import React from "react"
import ReactDOM from "react-dom"
import {Button, Grid} from "Semantic-ui-react" //bunu unutma


class On_off extends React.Component{
    constructor(){
        super();
        this.state = {
            on: true
        }
        this.handleClick = this.handleClick.bind(this) //bunu unutma
    }
    handleClick(){
            this.setState({
                on: !this.state.on
            })
    }
    render(){
        console.log(this.state.on)
        return(
            <div>
            <Grid textAlign="center">
                <Grid.Column width={4} ></Grid.Column>
                <Grid.Column width={8}>
                    <Button onClick={this.handleClick} color={this.state.on===true ? "blue" : "pink"}  > {this.state.on===true ? "ON" : "OFF" } </Button>
                 </Grid.Column>
                <Grid.Column  width={4}></Grid.Column>
            </Grid>
            
            </div> 
        )
    }
}

ReactDOM.render(
    <On_off/> , document.getElementById("root")
)
