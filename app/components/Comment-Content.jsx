import React, { PropTypes } from 'react';

class Content extends React.Component {
 
  render() {
    let {user, line1, line2} = this.props.comment;

    return <div>
      <div className="row">
        <div className="col-xs-3">
          <img className="footerss" src="left_img.png" alt="header" />
        </div>
        <div className="col-xs-9">
          <h1>{user}</h1>
          {line1}<br />{line2}
        </div>
      </div>
      <br/><br/>
      <div className="row">
        <div className="col-xs-12">
          <img className="footerss" src="footer.png" alt="header" />
       </div>
       </div>
  </div>;
  }
}

Content.propTypes = {
  comment: PropTypes.object
};

export default Content;


