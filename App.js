/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet, 
  View,
  Text,
  StatusBar,
} from 'react-native'; 
import 'react-native-gesture-handler'; 
import { createDrawerNavigator  } from '@react-navigation/drawer';
import DrawerNav from './navigations/DrawerNavigator'
import {  createStore , combineReducers ,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ProductReducer from "./store/reducers/ProductReducer";
import SavedReducer from "./store/reducers/SavedReducer";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  productReducer : ProductReducer,
  savedReducer : SavedReducer
});
 const store = createStore(rootReducer ,applyMiddleware(ReduxThunk))
const Drawer = createDrawerNavigator();
const App =  props  =>       {
  return ( 
    <Provider store={store}>
    <DrawerNav>      
    </DrawerNav> 
    </Provider>
    
  );
};

 
export default App;
