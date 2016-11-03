import React from 'react';

import Head from './Comment-Head';
import Content from './Comment-Content';

//export default () => <div>widget1</div>;

export default class Comment extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
      comment: {}
    };
  }

  componentDidMount(){
    fetch('comment.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({comment:responseData});
    });
  }

  render() {
    return <div className="row">
      <div className="col-xs-12 col-sm-6">
       <Head />
      </div>
      <div className="col-xs-12 col-sm-6">
        <Content comment={this.state.comment}  />
      </div>
    </div>;
  }
}