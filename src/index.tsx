import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux'
import {configureStore} from "@reduxjs/toolkit";
import {deckReducer} from './redux/deckSlice'
import App from './App';
import './index.css';

const store = configureStore({reducer: deckReducer});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);