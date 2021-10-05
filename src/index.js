import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App.jsx';

const initialState = [
    'Smells like spirit',
    'Enter Sandman'
];
// допустим у нас будет приложение, которое рабоатет с треками и плейлистами “playList”,  и первым аргументом будет state, который по дефолту – массив.  И передаем эту функцию, как аргумент, в createStore.
function playList(state = initialState, action) {
    // console.log(action);
    if (action.type === "ADD_TRACK") { // если экшентайп = ADD_TRACK, то мы вернем store, кот у нас сейчас state - пустой массив ,и мы хотим добавить наш трек(сейчас просто строка). Возвращаем массив и спредом добавляем action.payload
        return [
            ...state,
            action.payload
        ]; // тут возыращаем НОВЫЙ массив, это важно, т.к. наш store - иммутабельный,значит мы можем только создавать всегда новую копию данных, а не менять старое состояние store
    }
    return state;
}

const store = createStore(playList); // создаем store(хранилище всех данных в приложении), и передали в нее ф-ю, которая получает state и actions, и меняет store

// console.log(store.getState());

// store.subscribe(() => {
//     console.log('subscribe', store.getState()); // тут подписались ф-ей subscribe на изменения состояния нашего store, чтоб знать, что у нас изменились данные в нем?
// })
// Поменяем значение в store. Для этого ф-я dispatch(ф-я, кот выстреливает action, и это единственный способ поменять значение в store). Ф-я принимает на вход объект, и единственное, но обязательное поле - type.
// dispatch - событие, type - тип этого события. В данном случае событие - добавить трек, и в поле payload у нас находятся данные(тут просто строка).

// И дальше мы в нашем приложении просто стреляем actions с каким-то типом и данными, после чего наша ф-я playList об этом узнает, меняет данные в store, и возвращает нам новую копию store
// И теперь в subscribe в каллбекеы мы всегда знаем, как выглядит наш store, и можем что-либо перерисовать на странице
// store.dispatch({type: "ADD_TRACK", payload: "Smells like spirit" });
// store.dispatch({type: "ADD_TRACK", payload: "Enter Sandman" });
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));