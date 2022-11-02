import './appPleasureCards.scss';
import icon from '../../../../resourse/appPhotoCards/71qBQnpQFYL.png'
function AppPleasureCards({title, country, price}) {
    return (
        <div className="appCards">
            <img src={icon} alt=""/>
            <h4>{title}</h4>
            <h5>{country}</h5>
            <h5 >{price}</h5>
        </div>
    );
}

export default AppPleasureCards;