import React from 'react';import {Container} from 'flux/utils';import 'whatwg-fetch';import MailerStore from '../stores/MailerStore';import MailerActions from '../actions/MailerActions';class Mailer extends React.Component {  submit() {    let email = {      subject: this.refs.subject.value, 
      message: this.refs.message.value,
      isPost: true,
      isValid: false
    }    MailerActions.postEmail(email);    this.refs.message.value = '';    this.refs.subject.value = '';  }  verify() {    let isValid = this.refs.subject.value != "" && this.refs.message.value != "";
    let email = {      subject: this.refs.subject.value, 
      message: this.refs.message.value,
      isPost: false,
      isValid: isValid
    }
    
    MailerActions.verifyEmailContent(email);  }    render() {
    let showSummary = this.state.mailerState.isPost;
    let isAbled = this.state.mailerState == true ? "" : "disabled";
    let btnStatus = `btn btn-default ${isAbled}`;

    return (<div className="row">
      <div className="col-xs-12 col-sm-6">
         <div className="form-group">
          <label htmlFor="name" className="col-xs-12 control-label">Contacts</label>
          <div className="col-xs-12">
            <input className="btn btn-large btn-primary" type="button" value="Hello@me.com" />
            <input className="btn btn-large btn-success" type="submit" value="Andy@me.com"/>
            <img src="plus.png" alt="CommentHead" />
          </div>
        </div>
        <br/><br/><br/>
        <div className="form-group">
          <label htmlFor="review" className="col-sm-12 control-label">Subject</label>
          <div className="col-sm-12">
            <textarea id="review" name="review" rows="5" required="required" className="form-control" placeholder="You can add a subject" ref="subject" onChange={this.verify.bind(this)}></textarea>
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6">
        <div className="form-group">
          <label htmlFor="review" className="col-sm-12 control-label">Message</label>
          <div className="col-sm-12">
            <textarea id="review" name="review" rows="5" required="required" className="form-control" placeholder="Leave your message here" ref="message" onChange={this.verify.bind(this)}></textarea>
          </div>
        </div>
        <div>&nbsp;</div>
        <div className="form-group">
          <label htmlFor="review" className="col-xs-6 control-label">
            <input type="checkbox" name="checkbox" value="value" /> Save a copy
          </label>
          <div className="col-xs-6">
            <button className={btnStatus} type="submit" onClick={this.submit.bind(this)} >Send a Email</button>
          </div><hr/>
          <label className="col-xs-12"><hr/>
            {showSummary ? "Email has been sent:" : ""}
          </label>
          <label className="col-xs-12">
            {showSummary ? "Subject: " + (this.state.mailerState.subject) : ""}
          </label>
          <label className="col-xs-12">
            {showSummary ? "Message: " + (this.state.mailerState.message) : ""}
          </label>
        </div>
      </div>
    </div>);
  }
}Mailer.getStores = () => ([MailerStore]);Mailer.calculateState = (prevState) => ({  mailerState: MailerStore.getState()});const MailerContainer = Container.create(Mailer);export default MailerContainer;