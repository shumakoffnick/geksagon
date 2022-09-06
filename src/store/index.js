import { configureStore, combineReducers, } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import linkReducer from './slices/linkSlice';
import { persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER    } from 'redux-persist'
import  storage  from 'redux-persist/lib/storage'
const persistConfig = {
    key: "root",
    storage,

}
const rootReduser = combineReducers({
        user: userReducer,
        links: linkReducer
})

const persistedReducer = persistReducer(persistConfig, rootReduser)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions:[
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
            ]
        }
    })
})
export const persistor = persistStore(store)