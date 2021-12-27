import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
class Order extends React.Component {
    static propTypes = {
        fishes: PropTypes.object.isRequired,
        order: PropTypes.object.isRequired,
        removeFromOrder: PropTypes.func.isRequired
    };
    divAStyle = {
        position: 'absolute',
        left: '20px'
    };
    divBStyle = {
        position: 'absolute',
        right: '20px'
    };

    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];

        if (!fish)
            return null;
        const isAvailable = fish.status === 'available';
        if (!isAvailable) {
            return (
                <li key={key}>
                    Sorry {fish ? fish.name : 'fish'} is no longer availa
                    ble
                </li>
            );
        }
        return (
            <li key={key}>
                <span>
                    <div style={this.divAStyle}>
                        {count} x {fish.name}
                    </div>
                    <div style={this.divBStyle}>
                        {formatPrice(count * fish.price)}
                        <button onClick={() => {
                            this.props.removeFromOrder(key);
                        }}>
                            &times;
                        </button>
                    </div>
                </span>
            </li>
        );
    }

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, orderId) => {
            const fish = this.props.fishes[orderId];
            const count = this.props.order[orderId];
            const isAvailable = fish && fish.status === 'available';
            if (isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className="total">
                    Total: <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}
export default Order;