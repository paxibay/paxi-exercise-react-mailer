import '../main.css';
import React from 'react';

class About extends React.Component {
  render() {

    const headStyle = {
      commentHead: 'commentHead'
    };

    let commentHead = headStyle.commentHead;

    return (
      <div>
          <img className={commentHead} src="top_img.png" alt="CommentHead" />
      </div>
    );
  }
}

export default About;

