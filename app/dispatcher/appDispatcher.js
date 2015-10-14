import Flux from 'flux';

class AppDispatcher extends Flux.Dispatcher {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            actionDetail: action
        })
    }
}
export default new AppDispatcher();
