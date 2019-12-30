// TODO
class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        };
    }
    
    onListItemHover() {
        this.setState({
            hover: !this.state.hover
        });
    }
    render () {
        const style = {
            fontWeight: this.state.hover ? 'bold' : 'none';
        }

        return (
            <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.items}</li>
        )
    }
}

const GroceryList = (props) => (
    <ul>
        {props.items.map(item => 
            <GroceryListItem items={item} />
        )}
    </ul>
)


ReactDOM.render(<GroceryList items={['kale', 'broccoli', 'cucumbers']} />, document.getElementById('app'));
