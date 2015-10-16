import Alt from '../alt';

class AppActions {
    increment() {
        return 1
    }

    decrement() {
        return -1;
    }
}
export default Alt.createActions(AppActions);
