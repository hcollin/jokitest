import React from 'react';
import Joki from '../services/myJoki';
import { useListenJokiService, trigger } from 'joki';

export default function CounterView(props) {

    const [data] = useListenJokiService(Joki, "myService");

    function more() {
        trigger(Joki, {
            eventKey: "plus"            
        });
    }

    function less() {
        trigger(Joki, {
            eventKey: "minus"            
        });
    }

    return(
        <div className="counterView">
            <h1>{data.counter}</h1>
            <p><button onClick={more}>+</button> <button onClick={less}>-</button></p>
        </div>
    );
}