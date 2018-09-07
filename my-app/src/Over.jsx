import {Component} from "react";
import React from "react";

class Podsumowanie extends Component{
    constructor(props){
        super(props);
        this.state ={menuList: this.props.menuID,
            adresInf:this.props.adressInf
        };


    }


    componentDidUpdate(prevProps){

        if (prevProps.menuID !== this.props.menuID) {
            this.setState({menuList : this.props.menuID})
        }

        if (prevProps.adressInf !== this.props.adressInf) {
        this.setState({adresInf : this.props.adressInf})
            console.log(this.state.adresInf)
        }
    }

    render() {if(this.state.menuList != null){
        let pricess = this.state.menuList.map(elem=>{return parseInt(elem.price)}

        );
        let Takeaway;
        if(this.state.adresInf == null){
            Takeaway = <div>
                <span>Jedzenie do odbioru za : (ileś minut)</span>
            </div>
        }
        let Deliv;
        if(this.state.adresInf != null){
            Deliv = <div>
                <span>Adres dostawy : {this.state.adresInf}</span>
            </div>
        }
        return <div>
            <h2>Podsumowanie</h2>
            <ul>
                {this.state.menuList.map(elem =>{
                    return <li value={elem.price}>{elem.foodname}</li>
                })

                }

            </ul>
            <div>
                <h2>Cena</h2>
                <span>{pricess.reduce((a,b) => {return a + b})}</span>

            </div>
            <div>{Deliv}</div>
            <div>{Takeaway}</div>
        </div>
    }


    else{
        return <li>Skomponuj zamówienie</li>
    }

    }

}

export default Podsumowanie