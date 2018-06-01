import { connect } from 'react-redux';

import View from './view';
import { counterReset, counterAdd } from '../redux/actions';

const mapStateToProps = state => ({
  current: state.counter.current,
});

const mapDispatchToProps = dispatch => ({
  handleReset: () => dispatch(counterReset()),
  handleAdd: e => dispatch(counterAdd(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
