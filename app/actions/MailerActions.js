import AppDispatcher from '../AppDispatcher';
import mailerConstants from '../constants';

let MailerActions = {
  verifyEmailContent(email) {
    AppDispatcher.dispatch({
      type: mailerConstants.VERIFY_EMAIL_CONTENT,
      email:email
    });
  },

  postEmail(email) {
    AppDispatcher.dispatch({
      type: mailerConstants.POST_EMAIL,
      email:email
    });
  }
};

export default MailerActions;
