import './appProduct.scss'
import AppCards from "../appCards/AppCards";

function AppProduct({dataCards}) {
    const elements = dataCards.map((item , i)=> {
        return (
            <AppCards icon={(item.icon)} title={item.title} price={item.price} iconNum={item.iconNum}/>
        )
    })
    return (
        <div className="appProduct">
            <h1>Our best</h1>
            <div className="appProductMenu">
                {elements}
            </div>
        </div>
    );
}

export default AppProduct;