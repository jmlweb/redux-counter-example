import React from 'react';
import { connect } from 'react-redux';

import View from './view';

const App = ({ counter }) => <View counter={0} />;

const mapStateToProps = state => ({
  counter: state.counter.current,
});

export default connect(mapStateToProps)(App);
