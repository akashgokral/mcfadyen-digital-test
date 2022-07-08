import {legacy_createStore as createStore} from "redux"
import rootReducers from './Redux/Reducers/index';
import { persistReducer , persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisConfig = {
    key:"persist-store",
    storage
}

const persistedReducer = persistReducer(persisConfig,rootReducers)

const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const persistor = persistStore(store )

export default store