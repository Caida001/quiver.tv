import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import categoriesReducer from './categories_reducer';
import followsReducer from './follows_reducer';
import chatsReducer from './chats_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  channels: channelsReducer,
  follows: followsReducer,
  categories: categoriesReducer,
  chats: chatsReducer
});

export default entitiesReducer;
