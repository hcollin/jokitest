
import { createJoki, createReducerService } from  'joki';
import UserService from './UserService';
import {serviceId as redId, reducer as redReducer, initialState as redState } from './redService';

const Joki = createJoki();

new UserService(Joki);
createReducerService(redId, Joki, redState, redReducer);


export default Joki;