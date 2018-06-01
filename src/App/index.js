import { connect } from 'react-redux';

import View from './view';
import { counterAsyncReset, counterAdd, counterAddRandom } from '../redux/actions';

const mapStateToProps = state => ({
  current: state.counter.text,
});

const mapDispatchToProps = dispatch => ({
  handleReset: () => dispatch(counterAsyncReset()),
  handleRandom: () => dispatch(counterAddRandom()),
  handleAdd: e => dispatch(counterAdd(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
