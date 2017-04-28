import React from 'react';
import ItemForm from './item_form';
import ItemDetail from './item_detail';
import TotalAmountContainer from '../total_amount/total_amount_container';

class ItemIndex extends React.Component {
  constructor(){
    super();

  };

  render(){
    const { items, removeItem, updateItem, receiveItem, changeAmount } = this.props;
    const itemDetails = items.map(item => (
        <ItemDetail
          key={`item-list-detail${item.id}`}
          item={item}
          removeItem={ removeItem }
          updateItem= { updateItem }
          changeAmount= { changeAmount } />

      )
    );
    return(
      <div>
        <h1>Invoice Editor</h1>
        <ItemForm receiveItem={receiveItem} changeAmount = {changeAmount}/>
        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </tbody>
          {itemDetails}
        </table>
        <TotalAmountContainer/>
      </div>
    )
  };
};

export default ItemIndex;
