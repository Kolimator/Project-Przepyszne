import React, { Component } from 'react';
import {
    HashRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom'
import Restauracje from "./Restaurant"
import Menu from "./Menu"



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
    render(){
        return <div>
            <h2>Sposób dostawy</h2>
        </div>
    }
}

class Podsumowanie extends Component{
    constructor(props){
        super(props)
        this.state ={menuList: this.props.menuID }
    }
    componentDidUpdate(){

        if (this.props.menuID !== this.state.menuList) {
            this.setState({menuList : this.props.menuID})

        }

    }

    render() {if(this.state.menuList != null){
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
                <span>{}</span>
            </div>
        </div>
    }


else{
    return <li>Skomponuj zamówienie</li>
    }

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
            menu:null}

    }

    userRest =(restID)=>{
        this.setState({rest: restID });
        console.log(this.state.rest)
    };
    userChoose =(menuID)=>{
        this.setState({menu: menuID});
        console.log(this.state.menu)
    };



    render() {
        return <HashRouter>
        <div>
            <h1>Panel user</h1>
            <Navigation/>
            <Switch>
                <Route exact path='/restauracje' render={() => <Restauracje checkRest = {this.userRest}/>}/>
                <Route path='/menu' render={() => <Menu restID={this.state.rest} userChoose ={this.userChoose}/>} />
                <Route path='/delivery' component={Dostawa} />

                <Route path='*' component={NotFound} />
            </Switch>
            <Podsumowanie menuID = {this.state.menu}>


            </Podsumowanie>
        </div>
        </HashRouter>
    }
}

export default UserPanel

