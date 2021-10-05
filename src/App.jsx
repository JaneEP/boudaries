import {useState} from "react";
import React from 'react';
import './App.css';
import logo from './logo.svg';
import LoginForm from './components/LoginForm.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Second from './components/HelloError.jsx';
import First from './components/HelloYa.jsx';
import Main from './components/MainPage.jsx';
import PlayList from './components/PlayList';
import Header from './components/Header.jsx';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {LOCALES} from './components/intl/locales.jsx';
import {messages} from './components/intl/messages.jsx';

const App = () => {
    const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

    const handleChange = (e) => {
        setCurrentLocale(e.target.value);
        // storing locale in the localstorage
        localStorage.setItem("locale", e.target.value);
    };
    //localstorage
    function getInitialLocal() {
        // getting stored items
        const savedLocale = localStorage.getItem("locale");
        return savedLocale || LOCALES.ENGLISH;
    }

    return (
        <IntlProvider
            messages={messages[currentLocale]}
            locale={currentLocale}
            defaultLocale={LOCALES.ENGLISH}
        >
            <div className="app">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/first" component={First}/>
                        <Route exact path="/second" component={Second}/>
                    </Switch>
                </BrowserRouter>
                <header>
                    <img src={logo} alt="React logo"/>
                    <h1>React 16</h1>
                </header>
                <main className="Main">
                    <ErrorBoundary>
                        <LoginForm/>
                    </ErrorBoundary>
                </main>
                <div className="Main-playList">
                    <PlayList/>
                </div>
                <Header currentLocale={currentLocale} handleChange={handleChange}/>
            </div>
        </IntlProvider>
    );
};

export default connect(
    state => ({
        testStore: state
    }), dispatch => ({})
)(App);