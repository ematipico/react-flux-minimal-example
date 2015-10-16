import React from 'react';
import IncrementerButton from './components/incrementerButton/main.jsx';
import DecrementerButton from './components/decrementerButton/main.jsx';
import AppStore from './stores/appStore.js';
import connectToStores from 'alt/utils/connectToStores';

class App extends React.Component {
    static getStores() {
        return [AppStore];
    }

    static getPropsFromStores() {
        return AppStore.getState();
      }

      propTypes: {
          counter: React.PropTypes.object.isRequired
      }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>App - Count the hits!</h1>
                    <h2>{this.props.counter}</h2>
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
export default connectToStores(App);
