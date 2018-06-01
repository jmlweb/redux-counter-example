import { connect } from 'react-redux';

import View from './view';
import { counterAsyncReset, counterAdd } from '../redux/actions';

const mapStateToProps = state => ({
  current: state.counter.current.toString(),
});

const mapDispatchToProps = dispatch => ({
  handleReset: () => dispatch(counterAsyncReset()),
  handleAdd: e => dispatch(counterAdd(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
