import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApiRestService from "./service/api/api-rest-service";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import AccountConfigProvider from "./config/AccountConfigProvider";
import AppConfigProvider from "./config/AppConfigProvider";
import CustomerConfigProvider from "./config/CustomerConfigProvider";
import UserNotificator from "./service/notification/user-notificator";

const apiConfigProvider = new AppConfigProvider(),
    http = new ApiRestService(apiConfigProvider),
    accountHttp = new ApiRestService(new AccountConfigProvider());

const appConfigProvider = new AppConfigProvider();
const customerConfigProvider = new CustomerConfigProvider(
    's',
    localStorage.getItem('token')//todo: pobrać token
);

const notificator = new UserNotificator();

ReactDOM.render(
    <React.StrictMode>
        <App
            appConfigProvider={appConfigProvider}
            apiRestService={http}
            apiAccountRestService={accountHttp}
            customerConfigProvider={customerConfigProvider}
            notificator={notificator}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
