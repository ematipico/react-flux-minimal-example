import Store from './store.js';
import AppDispatcher from '../dispatcher/appDispatcher.js';
import AppConstants from '../constants/appConstants.js';

const CHANGE_EVENT = 'change';
class AppStore extends Store {
    constructor(counter) {
        super();
        this.counter = counter;
    }

    getInitState() {
        return 1;
    }

    getCounterState() {
        return this.counter;
    }
}

let appStoreInstance = new AppStore(0);
console.log(AppConstants)

appStoreInstance.dispatchToken = AppDispatcher.register(action => {
    switch(action.actionDetail.actionType) {

        case AppConstants.ActionTypes.INCREMENT:
            console.log('increment!');
            appStoreInstance.counter++;
        break;

        case AppConstants.ActionTypes.DECREMENT:
            console.log('decrement!');
            appStoreInstance.counter--;
        break;

        default:
        return;
    }

    appStoreInstance.emitChange();
    return true;
});

export default appStoreInstance;
