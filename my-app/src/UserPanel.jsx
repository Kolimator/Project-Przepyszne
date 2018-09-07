import React, { Component } from 'react';
import {
    HashRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom'
import Restauracje from "./Restaurant"
import Menu from "./Menu"
import Podsumowanie from "./Over"



class Navigation extends Component{
    render(){
        return<div>
            <Link to="/restauracje">Restauracje</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/delivery">Dostawa</Link>
            <Link to="/overall">Podsumowanie</Link>

        </div>
    }
}




class Dostawa extends  Component{
    constructor(props){
        super(props)
            this.state = {opt : "Dowóz",
        adress:null}


        };

        handleTitleChange = (event) => {
        this.setState({opt: event.target.value})
    };

        handleNamechange = (event)=>{
            this.setState({adress: event.target.value});
            this.props.userAdr(this.state.adress)


        };
    render(){
        let Dowoz;
        if(this.state.opt === "Dowóz"){
            Dowoz = <div>
                <form>
                    <input type="text" placeholder="Podaj adres" value={this.state.adress} onChange={this.handleNamechange}/>
                </form>
            </div>

        }

        let Odbior;
        if(this.state.opt === "Odbiór"){
            Odbior = <div>
                <span>Jedzenie do odbioru za</span>
            </div>
        }
        return <div>
            <h2 >Sposób dostawy</h2>
             <form onSubmit={this.handleSubmit}>
                 <select
                    value={this.state.opt}
                    onChange={this.handleTitleChange}>
                    <option value="Dowóz">Dowóz</option>
                    <option value="Odbiór">Odbiór</option>
                </select>
                 <div>{Dowoz}</div>
                 <div>{Odbior}</div>

            <input type="submit" value="Wybierz" />
        </form>


        </div>
    }
}


class NotFound extends Component{
    render(){
        return <div>Nie dziala</div>
    }
}

class UserPanel extends Component {
    constructor(props){
        super(props);
        this.state =  {rest:null,
            menu:null,
            adres:null}

    }

    userRest =(restID)=>{
        this.setState({rest: restID });
        console.log(this.state.rest)
    };
    userChoose =(menuID)=>{
        this.setState({menu: menuID});
        console.log(this.state.menu)
    };
    userAdress = (userAdres) =>{
        this.setState({adres:userAdres})
    };



    render() {
        return <HashRouter>
        <div>
            <h1>Panel user</h1>
            <Navigation/>
            <Switch>
                <Route exact path='/restauracje' render={() => <Restauracje checkRest = {this.userRest}/>}/>
                <Route path='/menu' render={() => <Menu restID={this.state.rest} userChoose ={this.userChoose}/>} />
                <Route path='/delivery' render={()=> <Dostawa userAdr={this.userAdress}  />} />

                <Route path='*' component={NotFound} />
            </Switch>
            <Podsumowanie menuID = {this.state.menu} adressInf={this.state.adres}>


            </Podsumowanie>
        </div>
        </HashRouter>
    }
}

export default UserPanel

