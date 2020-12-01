// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import TopArticles from './components/TopArticles';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import PostReducer from "./store/reducers/articleReducers";
import articleDetailsReducer from './store/reducers/articleDetailsReducer'
import  searchReducer from './store/reducers/searchReducer'

const rootreducer = combineReducers({
  art: PostReducer,
  searchItem : searchReducer ,
  artDetails:articleDetailsReducer 
  
});
// const looger = (store) => {
//   return (next) => {
//     return (action) => {
//       // console.log("[Middleware] Dispatching", action);
//       const result = next(action);
//       console.log("[Middleware] next state", store.getState());
//       return result;
//     };
//   };
// };
const store = createStore(rootreducer, composeWithDevTools( applyMiddleware(ReduxThunk)));
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <TopArticles/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
