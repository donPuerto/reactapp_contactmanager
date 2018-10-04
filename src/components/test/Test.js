import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // deprecated
  // componentWillMount() {
  //   console.log('componentWillMount...');
  // }

  // deprecated
  // componentWillUpdate() {
  //   console.log('componentWillUpdate...');
  // }

  componentDidUpdate() {
    console.log('componentDidUpdate...');
  }

  
  // deprecated
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('nextProps...', nextProps);
  //   console.log('nextState...', nextState);
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps...', nextProps);
    console.log('getDerivedStateFromProps...', prevState);
    return {
      test: 'something'
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(' getSnapshotBeforeUpdate...');
  }

  render() {
    const { title, body } = this.state;
    
    return (
      <div>
        <h1>Params: { this.props.match.params.id} </h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
