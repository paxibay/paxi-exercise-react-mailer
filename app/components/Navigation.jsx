import '../main.css';

import React, { Component } from 'react';
import {Link} from 'react-router';

class Navigation extends Component {
  render() {

    const navStyle = "navbar navbar-default navbar-fixed-top";

    return (
      <div className={navStyle}>
        <div className="container">
          <div className="navbar-header"><a href="/" className="navbar-brand">Front-End Evaluation</a>
            <button type="button" data-toggle="collapse" data-target="#navbar-main" className="navbar-toggle"><span className="icon-bar"></span><span class="icon-bar"></span><span className="icon-bar"></span></button>
          </div>
          <div id="navbar-main" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><Link to="/comment" activeClassName="active">Comment</Link></li>                <li><Link to="/mailer" activeClassName="active" >Mailer</Link></li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;

