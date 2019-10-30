import dispatcher from "./MonkeyDispatcher";
import {EventEmitter} from "events";
import * as MonkeyActions from "./MonkeyAction";

class MonkeyStore extends EventEmitter {

    constructor () {
        super();
        this.activity = "stand";
    }

    handleActions(action) {
        switch(action.type) {
            case MonkeyActions.MONKEY_ACTIONS.CHANGE_ACTIVITY: {
                console.log("Monkey Store=>"+action.value);
                this.activity = action.value;
                this.emit("storeUpdated");
                break;
            }
            default: {
                this.activity = "stand";
                this.emit("storeUpdated");
            }
        }
    }

    getActivity() {
        return this.activity;
    }
}

const monkeyStore = new MonkeyStore();
dispatcher.register(monkeyStore.handleActions.bind(monkeyStore));

export default monkeyStore;