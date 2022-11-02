import './appFilterButtons.scss';

function AppFilterButtons(props) {
    return (
        <div className="appFilterButtons">
            <button className="appButtonsTitle">Or filter</button>
            <button className="appButtons buttonsBorderRadiusRight">Brazil</button>
            <button className="appButtons">Kenya</button>
            <button className="appButtons buttonsBorderRadiusLeft">Columbia</button>
        </div>
    );
}

export default AppFilterButtons;