import React from 'react';
import PropTypes from 'prop-types';
class EditFishForm extends React.Component {
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            desc: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired
        }),
        index: PropTypes.string.isRequired,
        updateFish: PropTypes.func.isRequired
    };


    handleChange = (event) => {
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value,
        };
        updatedFish.price = parseInt(updatedFish.price);
        this.props.updateFish(this.props.index, updatedFish);
    };
    render() {
        const { image, name, price, desc, status } = this.props.fish;
        return (
            <div className="fish-edit">
                <input name="name" type="text" onChange={this.handleChange} value={name} />
                <input name="price" type="text" onChange={this.handleChange} value={price} />
                <select name="status" onChange={this.handleChange} value=
                    {status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={desc} />
                <input name="image" type="text" onChange={this.handleChange} value={image} />
                <button onClick={() => {
                    this.props.deleteFish(this.props.
                        index);
                }}>
                    Remove fish
                </button>
            </div>
        );
    }
}
export default EditFishForm;