'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Отправлено!';
    }
        
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Связаться!'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
//console.log(domContainer);
ReactDOM.render(e(LikeButton), domContainer);

