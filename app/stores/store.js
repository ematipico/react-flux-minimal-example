import AppDispatcher from '../dispatcher/appDispatcher.js';
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';
class TodoStore extends EventEmitter {
    constructor() {
        super();
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

}
TodoStore.dispatchToken = null;
export default TodoStore;
