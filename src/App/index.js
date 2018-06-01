import React, { Component } from 'react';
import { connect } from 'react-redux';

import View from './view';
import { counterReset, counterAdd } from '../redux/actions';

class App extends Component {
  static propTypes = {
    ...View.propTypes,
  };
  handleAdd = (e) => {
    this.props.handleAdd(e.target.value);
  };
  render() {
    const { current, handleReset } = this.props;
    return <View current={current} handleReset={handleReset} handleAdd={this.handleAdd} />;
  }
}

const mapStateToProps = state => ({
  current: state.counter.current,
});

const mapDispatchToProps = {
  handleReset: counterReset,
  handleAdd: counterAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
