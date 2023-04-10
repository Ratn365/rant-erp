import { combineReducers } from '@reduxjs/toolkit';

import globalReducer from './layout/global.store';
import tagsViewReducer from './layout/tags-view.store';
import userReducer from './user/user.store';

const rootReducer = combineReducers({
  user: userReducer,
  tagsView: tagsViewReducer,
  global: globalReducer,
});

export default rootReducer;
