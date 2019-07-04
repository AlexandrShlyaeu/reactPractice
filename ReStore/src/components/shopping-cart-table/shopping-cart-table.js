import React from "react";
import { withBookstoreService } from "../hoc";
import { compose } from "../../utils";
import { connect } from "react-redux";
import "./shopping-cart-table.css";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete
}) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => {
              onDecrease(id);
            }}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => {
              onIncrease(id);
            }}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => {
              onDelete(id);
            }}
            className="btn btn-outline-warning btn-sm float-right"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItem, orderTotal }) => {
  return { items: cartItem, total: orderTotal };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: id => {
      console.log(`increase`);
    },
    onDecrease: id => {
      console.log(`decrease`);
    },
    onDelete: id => {
      console.log(`delete`);
    }
  };
};

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ShoppingCartTable);
