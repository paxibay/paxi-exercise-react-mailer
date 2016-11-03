import './main.css';

import React    from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';import Navigation   from './components/Navigation';import About    from './components/About';
import Comment  from './components/Comment';
import Mailer   from './components/Mailer';

class App extends React.Component {
  render() {    const topStyle = {
      topPadding: 'topPadding'
    };    let contentTop = `container ${topStyle.topPadding}`;  return (<div>    <Navigation />          <div className={contentTop}>      {this.props.children}    </div>  </div>);  }  }let routes = (<Router history={browserHistory}>  <Route path="/" component={App}>    <IndexRoute component={About}/>    <Route path="comment" component={Comment} title="About Comment" />    <Route path="mailer" component={Mailer} />  </Route></Router>)ReactDOM.render(routes, document.getElementById('root'));