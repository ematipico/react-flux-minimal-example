import Alt from '../../alt';
import AppActions from '../../actions/appActions.js';

class IncrementStore {
    constructor(counter) {
        this.bindListeners({
            updateCounter: AppActions.increment,
        });

        this.state = {
            value: 1
        };
    }

    updateCounter(toIncrement) {
        this.setState({
            value: this.state.value + 1
        })
    }

}

export default Alt.createStore(IncrementStore, 'IncrementStore');
