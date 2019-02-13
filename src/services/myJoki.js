
import { createJoki, createReducerService } from  'joki';
import UserService from './UserService';

const Joki = createJoki();

new UserService(Joki);

createReducerService("myService", Joki, {counter: 0}, (state, action) => {
    switch(action.type) {
        case "plus":
            return {counter: ( state.counter + 1)};
        case "minus":
            return {counter: (state.counter - 1)};
        default:
            return state;
    }
});

export default Joki;