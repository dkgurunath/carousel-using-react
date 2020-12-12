import React from 'react'
import './items.css'

class ItemsClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            section : 'vegitable'
        }
        this.opensection = this.opensection.bind(this);
    }

    opensection(event){
        this.setState({
            section : event.target.value
        })
    }
    render(){
        return(
            <div id="itemSection">
                <div id="categories">
                    <button class="tab" value="Vegitable" onClick={this.opensection}> Vegitable</button>
                    <button class="tab" value="Mobile" onClick={this.opensection}> Mobile</button>
                    <button class="tab" value="Clothes" onClick={this.opensection}> Clothes</button>
                    <button class="tab" value="Sports" onClick={this.opensection}> Sports</button>
                    <button class="tab" value="Books" onClick={this.opensection}> Books</button>
                    <button class="tab" value="Electronics" onClick={this.opensection}> Electronics</button>
                </div>
                <div>
                    This is {this.state.section} Section
                </div>
            </div>
        )
    }
}

export default ItemsClass;