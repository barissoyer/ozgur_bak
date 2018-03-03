import React from "react"
import ReactDOM from "react-dom"
import {Button, Grid, Segment, Form, Checkbox} from "Semantic-ui-react"


class Prime_test extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 0, 
            print: "Lütfen bir sayı gir."
        }
        this.handlechange = this.handlechange.bind(this)
        this.handleclick = this.handleclick.bind(this)
    }
    handlechange(event){
        this.setState({value: event.target.value})
    }

    handleclick(){
        for(let i = 2; i<this.state.value ; i++){
            if(this.state.value % i === 0){
                this.setState({
                    print: "asal değil",
                    value: 0
                })
                return
            }
            this.setState({
                print: "Sayi asaldir",
                value: 0
            })
        }
    }
    render(){
        console.log(this.state.value)
        return(
        <div>
            <Grid columns="equal" >

                <Grid.Column>
                    
                </Grid.Column>

                <Grid.Column width={8}>
                    <Segment>
                        <Form>
                            <h1> {this.state.print} </h1>
                            <Form.Field>
                            <Form.Input value={this.state.value} onChange = {this.handlechange} label='Write a number'  />
                            </Form.Field>
                            <Button type='submit' onClick = {this.handleclick} >Check</Button>
                        </Form>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
        
                </Grid.Column>

            </Grid>
        </div>
        )
    }
}

ReactDOM.render(
    <Prime_test/> , document.getElementById("root")
)