
import { trigger } from 'joki';

const serviceId = "redService";

const initialState = {
    counter: 0
};

const reducer = (state, action) => {
    switch(action.type) {
        case "plus":
            return {counter: ( state.counter + 1)};
        case "minus":
            return {counter: (state.counter - 1)};
        default:
            return undefined;
    }
};

const actions = {
    plus: joki => {
        trigger(joki, {
            serviceId: serviceId,
            eventKey: "plus"
        });
    },
    minus: joki => {
        trigger(joki, {
            serviceId: serviceId,
            eventKey: "minus"
        });
    }
};


export {
    serviceId,
    initialState,
    reducer,
    actions
};