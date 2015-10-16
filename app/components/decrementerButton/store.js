import Alt from '../../alt';
import AppActions from '../../actions/appActions.js';

class DecrementerStore {
    constructor(counter) {
        this.bindListeners({
            updateCounter: AppActions.decrement,
        });

        this.state = {
            value: 1
        };
    }

    updateCounter(toDecrement) {
        this.setState({
            value: this.state.value + 1
        })
    }

}

export default Alt.createStore(DecrementerStore, 'DecrementerStore');
