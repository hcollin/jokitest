import React from 'react';
import Joki from '../services/myJoki';
import { useService } from 'joki';

import { serviceId, actions } from '../services/redService';

export default function CounterView(props) {

    const [data] = useService(Joki, serviceId);

    function more() {
        actions.plus(Joki);
    }

    function less() {
        actions.minus(Joki);
    }

    return(
        <div className="counterView">
            <h1>{data.counter}</h1>
            <p><button onClick={more}>+</button> <button onClick={less}>-</button></p>
        </div>
    );
}