import './appInfoMain.scss';
import AppInfoIcon from "../appInfoIcon/AppInfoIcon";

function AppInfoMain({title, icon, paragraph1, paragraph2}) {
    return (
        <div className="appInfoMain">
            <h1>{title}</h1>
            <AppInfoIcon icon={icon}/>
            <p>{paragraph1}</p>
            <br/>
            <p>{paragraph2}</p>
            <a href="#" >More</a>
        </div>
    );
}

export default AppInfoMain;