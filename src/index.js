import React from "react"
import ReactDOM from "react-dom"
import {List,Grid,Header,Icon,Button,Segment,Form} from "semantic-ui-react"

//let itemler = 

class Shopping_list extends React.Component{
    constructor(){
        super();
            this.state = {
                itemler:"",
                ekle: "limon"
            }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleRemove= this.handleRemove.bind(this)
    }
    // bu kalıbı ögren returnun icinde parametreyi fonksiyon cagırırken böyle 2 katlı yaz
    handleRemove(num){
        const fn = () =>{
            var start = this.state.itemler.slice(0,num)
            var end = this.state.itemler.slice(num+1)
            this.setState({
                itemler: start.concat(end)
            })
        }
        return fn.bind(this)
    }

    componentWillMount(){ //önemli sayfa yüklenmeden işlem yapmamızı sağliyor
        console.log("component will mount")
        this.setState({
            itemler: ['Apples', 'Pears', 'Oranges']
        })
    }

    handleClick(){
        if(this.state.ekle === ""){
            return
        }
        this.setState({
            itemler: this.state.itemler.concat(this.state.ekle),
            ekle:""
        })
    }

    handleChange(event){
        console.log(event)
        this.setState({ekle: event.target.value})
    }
   
    render(){
        console.log("component did mount")
        return(
            <div>
                <Grid columns='equal'>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="center">

                    <Header as='h1'>Shopping List</Header>
                    <Header as='h2'>Crucial Items</Header>
                    <Header as='h3'>Migros</Header>


                    <List animated className="liste" bulleted items={this.state.itemler} >
                    {this.state.itemler.map((item,num) => {
                        return <List.Item key={num} onClick={this.handleRemove(num)}>{item}</List.Item>
                    })}
                    </List>

                        
                    
                        <Form>
                            <h1> {this.state.print} </h1>
                            <Form.Field>
                            <Form.Input value={this.state.ekle} onChange = {this.handleChange} label='Enter item name'  />
                            </Form.Field>
                            <Button  type='submit' onClick = {this.handleClick} animated='vertical'>
                            <Button.Content hidden>ADD</Button.Content>
                            <Button.Content visible>
                                <Icon name='shop' />
                            </Button.Content>
                        </Button>
                        </Form>
                    
                     <Header as='h4' color='red'>The rain---not the reign---in Spain. </Header> 


                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                </Grid>
            </div>
        
        )
    }
    
}
ReactDOM.render(
    <Shopping_list/> , document.getElementById("root")
    )
    //