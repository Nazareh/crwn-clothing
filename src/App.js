import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';
import { render } from '@testing-library/react';
import { auth } from './firebase/firebase.utils';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(user);
        })
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div>
                <Header currentUser= {this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signIn' component={SignIn} />
                </Switch>
            </div>
        );
    }
}

export default App;
