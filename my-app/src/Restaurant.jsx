import {Component} from "react";
import React from "react";

class Restauracje extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.api = 'http://localhost:3010/restaurant/'

    }


    restaurantChoose = (event)=>{
        this.props.checkRest(event.target.id)
    };

    componentDidMount() {
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
            })

        }).catch(err => console.log(err));
    }
    render() {
        if (this.state.data != null){
            return <div><h2>Wybierz restauracje</h2>
                {this.state.data.map(elem => {
                    return <div key={elem.id} id={elem.id} onClick={this.restaurantChoose}>{elem.title}</div>
                })}</div>
        }

        else {
            return <h2>Brak restauracji</h2>
        }

    }



}

export default Restauracje