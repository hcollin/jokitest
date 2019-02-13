import { ClassService } from 'joki';


export default class UserService extends ClassService {
 
    constructor(jokiInstance) {
        super({
            joki: jokiInstance,
            serviceId: "UserService"
        });

        this.userInfo = null;
        this.loggedIn = false;
    }

    getState() {
        return this.userInfo;
    }

    messageHandler(sender, message, eventKey) {
        switch(eventKey) {
            case "loginUser":
                this._loginUser(message);
                break;
            default:
                break;

        }
    }

    _loginUser(userInfo) {
        console.log("Login user", userInfo);
        this.userInfo = userInfo;
        this.joki.updated();
    }

    

}




