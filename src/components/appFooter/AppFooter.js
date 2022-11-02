import './appFooter.scss';
import AppMenu from "../appMenu/AppMenu";
import AppInfoIcon from "../appInfoIcon/AppInfoIcon";

function AppFooter({iconMenu, iconInfo}) {
    return (
        <div className="appFooter">
            <AppMenu icon={iconMenu}/>
            <AppInfoIcon icon={iconInfo}/>
        </div>
    );
}

export default AppFooter;