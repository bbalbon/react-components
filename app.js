// TODO
const Cucumbers = () => (
    <li>Cucumbers</li>
)

const Kale = () => (
    <li>Kale</li>
)

const GroceryList = (props) => (
    <ul>
        {props.items.map(item => 
            <GroceryListItem items={item} />
        )}
    </ul>
)

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return <li>this.props.items</li>
    }
}


ReactDOM.render(<GroceryList />, document.getElementById('app'));
