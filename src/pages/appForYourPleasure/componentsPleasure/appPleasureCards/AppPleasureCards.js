import './appPleasureCards.scss';
import icon from '../../../../resourse/appPhotoCards/71qBQnpQFYL.png'
import {Link} from "react-router-dom";
function AppPleasureCards({title, country, price}) {
    return (
        <div className="appCards">
            <Link to="/cardInfo">
                <img src={icon} alt=""/>
                <h4>{title}</h4>
                <h5>{country}</h5>
                <h5 >{price}</h5>
            </Link>
        </div>
    );
}

export default AppPleasureCards;