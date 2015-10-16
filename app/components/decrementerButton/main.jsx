import React from 'react';
import DecrementerStore from './store.js';
import connectToStores from 'alt/utils/connectToStores';
import AppActions from '../../actions/appActions.js'

class DecrementerButton extends React.Component {
    static getStores() {
        return [DecrementerStore];
    }

    static getPropsFromStores() {
        return DecrementerStore.getState();
      }

    render() {
        return (
            <div className="card card-block">
                <p>The button has been hit <strong>{this.props.value}</strong> times</p>
                <hr />
                <button type="button" className="btn btn-primary btn-lg" onClick={this._decrement} >Decrement</button>
            </div>
        )
    }

    _decrement() {
        AppActions.decrement();
    }
}

export default connectToStores(DecrementerButton)
