import './appMenu.scss'
function AppMenu({icon}) {

    return (
        <div className="appMenu">
            <img src={icon} alt="icon"/>
            <ul className="appMenuItem">
                <li>
                    <a href="#">Coffee house</a>
                </li>
                <li>
                    <a href="#">Our coffee</a>
                </li>
                <li>
                    <a href="#">For your pleasure</a>
                </li>
            </ul>
        </div>
    );
}

export default AppMenu;