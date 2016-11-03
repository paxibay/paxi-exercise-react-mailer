import AppDispatcher from '../AppDispatcher';
import bankConstants from '../constants';
import {ReduceStore} from 'flux/utils';

class MailerStore extends ReduceStore {
  getInitialState() {
    return {};
  }

  reduce(state, action){
    switch (action.type) {
      case bankConstants.VERIFY_EMAIL_CONTENT:
        return action.email.isValid;
      case bankConstants.POST_EMAIL:
        return action.email;
      default:
        return state;
    }
  }
}

export default new MailerStore(AppDispatcher);