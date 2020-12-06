import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Provider} from 'react-redux';
import ArticlesScreen from './components/ArticlesScreen';
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
const store = createStore(rootreducer, composeWithDevTools( applyMiddleware(ReduxThunk)));
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <ArticlesScreen/>
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
