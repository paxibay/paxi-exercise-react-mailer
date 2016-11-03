import AppDispatcher from '../AppDispatcher';
import bankConstants from '../constants';

let MailerActions = {
  verifyEmailContent(email) {
    AppDispatcher.dispatch({
      type: bankConstants.VERIFY_EMAIL_CONTENT,
      email:email
    });
  },

  postEmail(email) {
    AppDispatcher.dispatch({
      type: bankConstants.POST_EMAIL,
      email:email
    });
  }
};

export default MailerActions;
