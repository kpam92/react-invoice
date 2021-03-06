import { connect } from 'react-redux';
import ItemIndex from './item_index'

import { receiveItem, removeItem, updateItem } from '../../actions/item_actions'
import { changeAmount } from '../../actions/amount_actions'
import { allItems } from '../../reducers/selectors'

const mapStateToProps = state => ({
  items: allItems(state)
})

const mapDispatchToProps = dispatch => ({
  receiveItem: (item) => dispatch(receiveItem(item)),
  removeItem: (item_id) => dispatch(removeItem(item_id)),
  updateItem: (item) => dispatch(updateItem(item)),
  changeAmount: (oldTotal,newTotal) => dispatch(changeAmount(oldTotal,newTotal))
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex);
