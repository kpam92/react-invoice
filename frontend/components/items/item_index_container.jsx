import { connect } from 'react-redux';
import ItemIndex from './item_index'

import { receiveItem, receiveItems, removeItem, updateItem } from '../../actions/item_actions'
import { updateAmount } from '../../actions/amount_actions'
import { allItems } from '../../reducers/selectors'

const mapStateToProps = state => ({
  items: allItems(state)
})

const mapDispatchToProps = dispatch => ({
  receiveItem: (item) => dispatch(receiveItem(item)),
  receiveItems: () => dispatch(receiveItems()),
  removeItem: (item_id) => dispatch(removeItem(item_id)),
  updateItem: (item) => dispatch(updateItem(item)),
  updateAmount: (amount) => dispatch(updateAmount(amount))
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex);
