import React from 'react';

import { useListenJokiService } from 'joki';
import Joki from '../services/myJoki';

import LoginView from './LoginView';
import CounterView from './CounterView';


export default function MainView(props) {

    const [user] = useListenJokiService(Joki, "UserService");
    
    return(
        <div className="main-view">
            {user === null && (
                <LoginView />
            )}
            {user !== null && (
                <CounterView />
            )}
        
        </div>
    );
}