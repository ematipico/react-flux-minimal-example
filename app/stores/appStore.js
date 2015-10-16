import Alt from '../alt';
import AppActions from '../actions/appActions.js';

class AppStore {
    constructor(counter) {
        this.bindListeners({
            updateCounter: [AppActions.decrement, AppActions.increment],
            fetchData: AppActions.askData
        });

        this.state = {
            counter: 0,
            posts: null
        };
    }

    updateCounter(counter) {
        this.setState({
            counter: this.state.counter + (counter)
        })
    }

    fetchData(data) {
        this.setState({
            posts: data
        })
    }

}

export default Alt.createStore(AppStore, 'AppStore');
