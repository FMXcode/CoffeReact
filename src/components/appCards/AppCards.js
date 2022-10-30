import './appCards.scss';
function AppCards({icon, title, price, iconNum}) {
    console.log(Object.values(icon))
    return (
        <div className="appCards">
            <a href="#"><img src={Object.values(icon)} alt="item"/></a>
            <p>{title}</p>
            <p className="appCardsPrice">{`${price}$`}</p>
        </div>
    );
}

export default AppCards;