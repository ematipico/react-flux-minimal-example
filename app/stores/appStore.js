import Alt from '../alt';
import AppActions from '../actions/appActions.js';

class AppStore {
    constructor(counter) {
        this.bindListeners({
            updateCounter: [AppActions.decrement, AppActions.increment]
        });

        this.state = {
            counter: 0
        };
    }

    updateCounter(counter) {
        this.setState({
            counter: this.state.counter + (counter)
        })
    }

}

export default Alt.createStore(AppStore, 'AppStore');
