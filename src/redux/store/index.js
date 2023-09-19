import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../reducers/jobsReducer";
import favoritesReducer from "../reducers/favoritesReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  favoriteJobs: favoritesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
