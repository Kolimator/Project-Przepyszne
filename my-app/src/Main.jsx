import React, { Component } from 'react';
import {Link} from "react-router-dom";
import UserPanel from "./UserPanel";



class LogFormular extends  Component{
    constructor(props){
        super(props);
        this.state = {loginValue : '',
        loginPassword:''}
    }

    loginChange =(event)=>{
        this.setState({loginValue:event.target.value})
        console.log(this.state.loginValue)
    };
    passwordChange = (event)=>{
        this.setState({loginPassword: event.target.value})
        console.log(this.state.loginPassword)
    };

    userValidation =(event)=>{event.preventDefault();
        if((this.state.loginValue === "user") && (this.state.loginPassword === "12345")){
            this.props.usertest(true)


    }
    else {
        console.log("blad logowania")
    }

    };



    render(){
        return <div>
            <form>
            <input placeholder="wpisz login" value={this.state.loginValue} onChange={this.loginChange}/>
            <input placeholder="wpisz haslo" type="password" value={this.state.loginPassword} onChange={this.passwordChange}/>
            <button onClick={this.userValidation}>Zaloguj</button>
        </form>
        </div>

    }
}


class Main extends Component{
    constructor(props){
        super();
        this.state = {password :false,
            username:false,
            validation:false

        }

    }
    usertest =(logTrue)=>{
        this.setState({validation: logTrue})
    };
    render(){if(this.state.validation === true){
            return <div>
                <h1>Witaj na przepyszne</h1>
                <LogFormular usertest={this.usertest} />
            </div>

        }
        else {
            return <UserPanel/>
    }
    }

}


export default Main