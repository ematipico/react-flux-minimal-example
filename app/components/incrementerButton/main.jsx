import React from 'react';
import DecrementerStore from './store.js';
import connectToStores from 'alt/utils/connectToStores';
import AppActions from '../../actions/appActions.js'

class IncrementerButton extends React.Component {
    static getStores() {
        return [DecrementerStore];
    }

    static getPropsFromStores() {
        return DecrementerStore.getState();
      }

    render() {
        return (
            <div className="card card-block">
                The button has been hit <strong>{this.props.value}</strong> times
                <hr />
                <button type="button" className="btn btn-primary btn-lg"  onClick={this._increment} >Increment</button>
            </div>
        )
    }
    _increment() {
        AppActions.increment();
    }
}
export default connectToStores(IncrementerButton)
