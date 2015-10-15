import React from 'react';
import AppStore from '../../stores/appStore.js';
import AppActions from '../../actions/appActions.js';

export default class DecrementerButton extends React.Component {
    constructor() {
        super()
        this.state = {
            value: AppStore.getInitState()
        };
        this._decrement = this._decrement.bind(this);
    }

    render() {
        return (
            <div className="card card-block">
                <p>The button has been hit <strong>{this.state.value}</strong> times</p>
                <hr />
                <button type="button" className="btn btn-primary btn-lg" onClick={this._decrement} >Decrement</button>
            </div>
        )
    }
    _decrement() {
        this.setState({
            value: this.state.value + 1
        })
        AppActions.decrement();
    }
}
