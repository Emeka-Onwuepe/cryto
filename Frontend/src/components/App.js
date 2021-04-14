import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/es/promise';
import 'core-js/es/array';
import 'core-js/features/array/from'; 
import 'core-js/features/array/flat'; 
import 'core-js/features/set';        
import 'core-js/features/promise'; 
import "core-js/features/array/join";
import "core-js/es/array/join";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { transitions, positions, types } from 'react-alert';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import StoreContextProvider from '../State/State';
import Alerts from './Alerts';
import Routes from './Routes';
import Loading from "./Loading";
import BackToTop from './BackToTop';
import Header from './HEADER/Header';
import '../CSS/font.css';
import '../CSS/main.css'
import Footer from './FOOTER/Footer';

const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE,
    type: types.INFO,
}

const App = () => {
    return (
        <StoreContextProvider>
            <AlertProvider template={AlertTemplate} {...options}>
                <HashRouter>
                <Header/>
                  <BackToTop />
                    <Loading />
                    <Routes />
                    <Footer date={2021}/>
                    <Alerts />
                </HashRouter>
            </AlertProvider>
        </StoreContextProvider>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'))

//export default App;
