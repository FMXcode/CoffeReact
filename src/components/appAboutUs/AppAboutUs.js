import './appAboutUs.scss';
import AppInfoMain from "../appInfoMain/AppInfoMain";

function AppAboutUs({dataAbout}) {
    const {title, icon, paragraph1, paragraph2} = dataAbout[0]
    return (
        <div className="appAbout">
            <AppInfoMain
                title={title}
                icon={icon.icon2}
                paragraph1={paragraph1}
                paragraph2={paragraph2}
            />
        </div>
    );
}

export default AppAboutUs;