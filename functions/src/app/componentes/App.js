import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import store from '../redux/store'
import { Provider } from 'react-redux'
import Formulario from './Formulario'


const Home = () => {

    return (
        
        <div className="container-fluid">
            <Formulario />
        </div>
        
           )

}

const App = (props) => {
    return (
    <Provider store={store}>
    <BrowserRouter>

        <Route path='/' exact component={Home} />

    </BrowserRouter>
    </Provider>
    )
}

export default App