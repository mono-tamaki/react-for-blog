class MyView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // ステートを使う際には、他で参照できるように初期化（宣言）が必要
            this_title : this.props.title
        }
    }

    calcMultiple =()=> {
        let res = this.state.item_price * this.state.item_count;
        this.setState({
            item_result : res
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.this_title}</h1>
                <MyCalc name="メロン" price={540}/>
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
            // ステートを使う際には、他で参照できるように初期化（宣言）が必要
            item_name : this.props.name,
            item_price     : this.props.price,
            item_count     : 0,
            item_result    : 0
        }

        // ES6は明示的にbindしてあげる必要がある
        this.setCount = this.setCount.bind(this);
        this.calcMultiple = this.calcMultiple.bind(this);
    }

    setCount =(event)=> {
        this.setState({
            item_count : event.target.value
        });
    }

    calcMultiple =()=> {
        let res = this.state.item_price * this.state.item_count;
        this.setState({
            item_result : res
        });
    }

    render() {
        return (
            <div>
                <p style={{display: "inline"}}>{this.props.name} : {this.props.price}円</p>
                &nbsp;x&nbsp;
                <input type="text" name="count" placeholder={this.state.item_count} onChange={this.setCount}/>
                &nbsp;
                <button onClick={this.calcMultiple}> = </button>&nbsp;&nbsp;
                <p style={{display: "inline"}}>{this.state.item_result}</p>円
            </div>
        );
    }
}

/* 生成したコードをindex.htmlの#rootに出力 */
ReactDOM.render(
    <MyView title="らくらくお買い物♪" />,
    document.getElementById('root')
);