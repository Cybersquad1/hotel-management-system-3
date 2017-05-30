import { Middleware, Store, createStore, applyMiddleware, compose } from 'redux';
import { IStore } from './IStore';
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { ShoppingCart} from '../shoppingCart'
import { rootReducer } from './reducers'


// const enhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const InitialState: IStore = {
    shoppingCart: {} as ShoppingCart,
    roomTypeIds: [],
    roomContent: {}
}

function configureStore(initialState = InitialState): Store<IStore> {
    console.log('configureStore called');
    let middlewares: Middleware[] = [
        ReduxThunk,
        createLogger()
    ];

    const store = createStore(rootReducer,
        initialState,
        applyMiddleware(...middlewares));

    return store;
}

export const store = configureStore();