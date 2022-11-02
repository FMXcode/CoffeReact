import './appPleasureAboutOur.scss'
import AppPleasureAboutMain from "../appPleasureAboutMain/AppPleasureAboutMain";


function AppPleasureAboutOur({dataAboutOur}) {
    const {photo, title, icon, paragraph1, paragraph2} = dataAboutOur[0];
    return (
        <div className="appPleasureAboutOur">
            <img src={photo.photo} alt="girl" className="appPhoto"/>
            <AppPleasureAboutMain
                title={title}
                icon={icon}
                paragraph1={paragraph1}
                paragraph2={paragraph2}
            />
        </div>
    );
}

export default AppPleasureAboutOur;