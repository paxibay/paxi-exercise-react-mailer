import { combineReducers } from 'redux';

import todos from '../modules/todos';
import dashboard from '../modules/cb-dashboard';
import blueprint from '../modules/cb-blueprint';
import mailer from '../modules/mailer';


const rootReducer = combineReducers({
  todos, dashboard, blueprint, mailer
});

export default rootReducer;

