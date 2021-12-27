import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };
    addFish = (fish) => {
        //1. Take a copy of the existing state -
        const fishes = { ...this.state.fishes }; //use of SPREAD

        //2. add new fish with unique key
        fishes[`fish${Date.now()}`] = fish;
        //3. Set the new fishes object to state
        this.setState({
            fishes: fishes
        });
    };
    addToOrder = (key) => {
        const order = { ...this.state.order };
        //either add to the order or update the number in our order
        order[key] = order[key] + 1 || 1;
        this.setState({
            order: order
        });
    };

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    };

    componentDidMount() {
        const { params } = this.props.match;
        console.log("dintre");
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    updateFish = (key, updatedFish) => {
        //take a copy of the current state
        const fishes = { ...this.state.fishes };
        //update that state
        fishes[key] = updatedFish;
        //set that to be the new state
        this.setState({
            fishes: fishes
        });
    };

    deleteFish = (key) => {
        //take a copy of current state
        const fishes = { ...this.state.fishes };
        //remove an object from state.
        fishes[key] = null;
        //update state
        this.setState({
            fishes: fishes
        });
    };

    removeFromOrder = (key) => {
        const order = { ...this.state.order };
        delete order[key];
        this.setState({
            order: order
        });
    };

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    };

    componentDidMount() {
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });

        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key =>
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />)
                        }
                    </ul>
                </div>
                <Order
                    fishes={this.state.fishes}
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}
                />
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    fishes={this.state.fishes}
                />
            </div>
        );
    }
}
export default App;