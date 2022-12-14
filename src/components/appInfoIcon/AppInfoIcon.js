import './appInfoIcon.scss';

function AppInfoIcon({icon}) {
    return (
        <div className="appInfoIcon">
            <div className="line"></div>
            <img src={icon} alt=""/>
            <div className="line"></div>
        </div>
    );
}

export default AppInfoIcon;