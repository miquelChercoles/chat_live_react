import React from 'react';
class StorePicker extends React.Component {
    myInput = React.createRef();
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {
        event.preventDefault();
        console.log(this.myInput.current.value);
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }
    componentDidMount() {
        console.log('Mounted');
        console.log(this);
    }
    render() {
        return (
            <React.Fragment>
                <p>Sibling of FORM. It works due to react.fragment</p>
                <form className="storeselector" onSubmit={this.goToStore}>
                    <h2>Please enter a store</h2>
                    <input
                        type="text"
                        ref={this.myInput}
                        required
                        placeholder="Store name"
                        defaultValue='fish-store-1' />
                    <button type="submit">Visit store</button>
                </form>
            </React.Fragment>
        );
    }
}
export default StorePicker;