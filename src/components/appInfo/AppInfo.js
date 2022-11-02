import './appInfo.scss';
import AppMenu from "../appMenu/AppMenu";
import AppInfoMain from "../appInfoMain/AppInfoMain";
function AppInfo({dataInfo}) {
    const {title, icon, icon2, paragraph1, paragraph2} = dataInfo[0]
    return (
        <div className="appInfo">
            <AppMenu icon={icon2.iconMenuWhite}/>
            <AppInfoMain
                title={title}
                icon={icon.icon1}
                paragraph1={paragraph1}
                paragraph2={paragraph2}/>
        </div>
    );
}

export default AppInfo;