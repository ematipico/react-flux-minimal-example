import AppDispatcher from '../dispatcher/appDispatcher.js';
import AppConstants from '../constants/appConstants.js';


class AppActions {

    increment() {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ActionTypes.INCREMENT
        })
    }

    decrement() {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ActionTypes.DECREMENT
        })
    }

}
export default new AppActions();
