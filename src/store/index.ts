import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/todo';

const configureStore = () => {
    return createStore(reducers, applyMiddleware(reduxThunk));
};

export default configureStore;