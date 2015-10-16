import Alt from '../alt';
import $ from 'jquery';

class AppActions {
    constructor() {
        this.generateActions('setData');
    }

    increment() {
        return 1
    }

    decrement() {
        return -1;
    }

    askData() {
        console.log('fetchData')
        return (dispatch) => {
            $.ajax('./app/actions/data.json', {
                success: (result) => {
                    console.log(result.data)
                    dispatch(result.data);
                }
            })
        }

    }
}
export default Alt.createActions(AppActions);
