class MyView extends React.Component {

    render() {
        return (
            <div>
                <MyCalc name="メロン" price={540} />
                <MyCalc name="りんご" price={160} />
                <MyCalc name="バナナ" price={230} />
            </div>
        );
    }
}

class MyCalc extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item_quantity: 0,
            item_amount: 0
        }

        // ES6は明示的にbindしてあげる必要がある
        this.setCount = this.setCount.bind(this);
        this.calcMultiple = this.calcMultiple.bind(this);
    }

    setCount =(event)=> {
        this.setState({
            item_quantity: event.target.value
        });
    }

    calcMultiple =()=> {
        let amount = this.props.price * this.state.item_quantity;
        this.setState({
            item_amount: amount
        });
    }

    render() {
        return (
            <p>
                <span>{this.props.name} : {this.props.price}円 x </span>
                <input type="text" name="count" onChange={this.setCount}/>個
                <button onClick={this.calcMultiple}> 【計算する】 </button>
                <span>{this.state.item_amount}</span>円
            </p>
        );
    }
}

/* 生成したコードをindex.htmlの#area_calcに出力 */
ReactDOM.render(
    <MyView />,
    document.getElementById('area_calc')
);