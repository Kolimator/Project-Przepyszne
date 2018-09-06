import {Component} from "react";
import React from "react";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state ={restID:this.props.restID,
            data:null
        };

        this.order = [];
        this.api = `http://localhost:3010/restaurant/${this.state.restID}`

    }
    componentDidMount() {
        if(this.state.restID != null){
            fetch(this.api).then(r => {

                // Obsługa ewentualnych błędów sieci
                if (r.ok)
                    return r.json();
                else
                    throw new Error("Błąd sieci")

            }).then(data => {
                console.log(data);

                this.setState({
                    data
                });


            }).catch(err => console.log(err));
        }}


    choose = (elem)=>{this.order.push(elem);
        console.log(this.order)
        this.props.userChoose(this.order)
    };

    render() {

        if (this.state.data != null){
            return <div><h2>Wybierz dania</h2>
                <ul>{this.state.data.menu.map((elem)=>{
                    return <li  onClick={()=>this.choose(elem)} >{elem.foodname} </li>
                })}</ul>
            </div>
        }

        else {
            return <h2>Nie wybrano restauracji</h2>
        }

    }
}

export default Menu