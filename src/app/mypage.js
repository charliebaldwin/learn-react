import './mypage.css';

export default function MyPage() {
    return (
        <div>
            <h1>my page</h1>
            <MyList />
        </div>
    );

}

function MyList() {
    return (
        <div className = "BorderedDiv">
            <h2>my list</h2>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </div>
    );
}