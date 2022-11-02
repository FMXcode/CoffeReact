import './appPleasureAboutMain.scss';
import AppInfoIcon from "../../../../components/appInfoIcon/AppInfoIcon";

function AppPleasureAboutMain({title, icon, paragraph1, paragraph2}) {
    return (
        <div className="appPleasureAboutMain">
            <h2>{title}</h2>
            <AppInfoIcon icon={icon.iconBlack}/>
            <p>{paragraph1}</p>
            <br/>
            <p>{paragraph2}</p>
        </div>
    );
}

export default AppPleasureAboutMain;