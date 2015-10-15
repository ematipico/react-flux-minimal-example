import React from 'react';
import AppStore from '../../stores/appStore.js';
import AppActions from '../../actions/appActions.js';

export default class IncrementerButton extends React.Component {
    constructor() {
        super()
        this.state = {
            value: AppStore.getInitState()
        };
        this._increment = this._increment.bind(this);
    }
    render() {
        return (
            <div className="card card-block">
                The button has been hit <strong>{this.state.value}</strong> times
                <hr />
                <button type="button" className="btn btn-primary btn-lg"  onClick={this._increment} >Increment</button>
            </div>
        )
    }
    _increment() {
        this.setState({
            value: this.state.value + 1
        })
        AppActions.increment();
    }
}
