// Libs
import React, { Component } from 'react'; // ,PropTypes

export default class Dashboard extends Component {
  static propTypes = {

  }
  componentWillMount() {
    this.setState({
      counter: 0,
    });
  }
  componentDidMount() {


    this.inteval = window.setInterval(() => {

      this.setState({
        counter: this.state.counter + 1,
      });

    }, 1000);
  }
  componentWillUnmount() {
    window.clearInterwal(this.interval);
  }
  render() {
    return (
      <div>
        Dashboard {this.state.counter}
      </div>
    );
  }
}
