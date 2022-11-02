import './appFilterInput.scss';

function AppFiterInput(props) {
    return (
        <div className="appFilterInput">
            <button>Lookiing for</button>
            <input type="text" placeholder="start typing here..."/>
        </div>
    );
}

export default AppFiterInput;