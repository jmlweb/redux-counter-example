import React from 'react';
import { connect } from 'react-redux';

import View from './view';
import { counterReset } from '../redux/actions';

const App = ({ current, handleReset }) => <View handleReset={handleReset} current={current} />;

const mapStateToProps = state => ({
  current: state.counter.current,
});

const mapDispatchToProps = {
  handleReset: counterReset,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
