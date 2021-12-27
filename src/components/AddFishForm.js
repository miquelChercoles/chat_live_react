import React from 'react';
import PropTypes from 'prop-types';
class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    static propTypes = {
        addFish: PropTypes.func.isRequired
    };

    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseInt(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addFish(fish);
        //reset the form
        event.currentTarget.reset();
    };

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeho
                    lder="Name" />
                <input name="price" ref={this.priceRef} type="number" pla
                    ceholder="Price" />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Description" />
                <input name="image" ref={this.imageRef} type="text" place
                    holder="Image" />
                <button type="submit">Add fish</button>
            </form>
        );
    }
}
export default AddFishForm;