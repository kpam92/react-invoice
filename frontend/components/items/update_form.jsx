import React from 'react';
import { uniqueId } from '../../util/idGenerator';

class UpdateForm extends React.Component {
  constructor(props){
    super(props);
    const { item } = this.props
    // const { title, qty, price, total } = item
    this.state = {
      title: item.title,
      qty: item.qty,
      price: item.price,
      total: item.total,
      id: item.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    // debugger;
    e.preventDefault();
    const newTotal = (parseFloat(this.state.price) * parseFloat(this.state.qty)).toFixed(2);
    const updatedItem = Object.assign({},this.state, { total: newTotal });
    this.props.updateItem(updatedItem);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
  }
  update_money(property) {
    return e => this.setState({[property]: parseFloat(e.target.value).toFixed(2)})
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Item:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="Sushi"
            onChange={this.update('title')}
            required/>
        </label>
        <label>Qty:
          <input
            className="input"
            ref="qty"
            type="number"
            min='0'
            value={this.state.qty}
            placeholder="1"
            onChange={this.update('qty')}
            required></input>
        </label>
        <label>Price:$
          <input
            className="input"
            type="number"
            step=".01"
            min ='0'
            ref="price"
            value={this.state.price}
            placeholder="(no commas)"
            onChange={this.update_money('price')}
            required></input>
        </label>
        <button className="create-button">Update item</button>
      </form>
    );
  }

};

export default UpdateForm;