class MyTable extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}テーブル</h1>
                <table border="1" width="200" cellspacing="0" cellpadding="5" bordercolor="#000">
                    <tr><th>　</th><th>１組</th><th>２組</th></tr>
                    <tr><th>男</th><td>19</td><td>17</td></tr>
                    <tr><th>女</th><td>18</td><td>20</td></tr>
                </table>
            </div>
        );
    }
}

/* 生成したコードをindex.htmlの#rootに出力 */
ReactDOM.render(
    <MyTable name="testname" />,
    document.getElementById('root')
);