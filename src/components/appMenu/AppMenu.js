import './appMenu.scss'
import {Link} from "react-router-dom";

function AppMenu({icon}) {

    return (
        <div className="appMenu">
            <img src={icon} alt="icon"/>
            <ul className="appMenuItem">
                <li>
                    <Link to="/">Coffee house</Link>
                </li>
                <li>
                    <Link to="/CoffeeHouse">Our coffee</Link>
                </li>
                <li>
                    <Link to="/OurCoffee">For your pleasure</Link>
                </li>
            </ul>

        </div>
    );
}

export default AppMenu;