import React from 'react';
import IncrementerButton from './components/incrementerButton.jsx';
import DecrementerButton from './components/decrementerButton.jsx';
import AppStore from './stores/appStore.js';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: AppStore.getCounterState()
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        AppStore.addChangeListener(this.onChange);
    }
    componentWillUnmount() {
        AppStore.removeChangeListener(this.onChange);
    }
    onChange() {
        this.setState({
            counter: AppStore.getCounterState()
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>App - General incrementer</h1>
                    <h2>{this.state.counter}</h2>
                    <div className="col-sm-6">
                        <IncrementerButton />
                    </div>
                    <div className="col-sm-6">
                        <DecrementerButton />
                    </div>
                </div>
            </div>
        )
    }
}
