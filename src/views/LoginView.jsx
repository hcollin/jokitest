import React from 'react';

import Joki from '../services/myJoki';
import { trigger } from 'joki';

export default function LoginView(props) {

    function login() {
        trigger(Joki, {
            serviceId: "UserService",
            eventKey: "loginUser",
            data: {
                name: "Henrik"
            }
        });
    }

    return(
        <div className="loginView">
            <h2>Please login</h2>

            <button onClick={login}>Login</button>
        </div>
    );
}