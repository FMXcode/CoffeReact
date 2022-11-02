import './appCardsInfoMain.scss';
import AppInfoIcon from "../../../../components/appInfoIcon/AppInfoIcon";

function AppCardsInfoMain({dataCardsInfoMain}) {
    const {photo, icon, title, country, description, price} = dataCardsInfoMain[0]
    console.log(dataCardsInfoMain)
    return (
        <div className="appCardsInfoMain">
            <img src={photo.photoCoffee} alt="coffee" className="appCardsPhoto"/>
            <div className="appCardsAbout">
                <h2>{title}</h2>
                <AppInfoIcon icon={icon.iconBlack}/>
                <p>{country}</p>
                <p>{description}</p>
                <p>{price}</p>
            </div>

        </div>
    );
}

export default AppCardsInfoMain;