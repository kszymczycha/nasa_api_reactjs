import React, { Component } from 'react'
import Form from './Form';
import List from './List';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '../store';
import '../scss/app.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <Form />
                    <List />
                </div>
           </Provider>
        )
    }
}

export default App;

