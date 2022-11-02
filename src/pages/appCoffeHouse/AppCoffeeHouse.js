import './appCoffeeHouse.scss';
import AppInfo from "../../components/appInfo/AppInfo";
import AppAboutUs from "../../components/appAboutUs/AppAboutUs";
import AppProduct from "../../components/appProduct/AppProduct";
import AppFooter from "../../components/appFooter/AppFooter";
import icon1 from '../../resourse/appIcon/Vector.png'
import icon2 from '../../resourse/appIcon/VectorBlack.png'
import iconMenuWhite from '../../resourse/appIcon/Group.png'
import iconMenuBlack from '../../resourse/appPhotoCards/Vector.png'
import cardsPhoto1 from '../../resourse/appPhotoCards/815O9ktyfUL.png'
import cardsPhoto2 from '../../resourse/appPhotoCards/91Ryk2gKejL.png'
import cardsPhoto3 from '../../resourse/appPhotoCards/71qBQnpQFYL.png'

const dataInfo = [
        {title: "Everything You Love About Coffee", icon: {icon1}, icon2: {iconMenuWhite},
            paragraph1: "We makes every day full of energy and taste",
            paragraph2: "Want to try our beans?"},
    ],
    dataAbout = [
        {title: "About Us", icon: {icon2},
            paragraph1: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n" +
                "Afraid at highly months do things on at. Situation recommend objection do intention\n" +
                "so questions. As greatly removed calling pleased improve an. Last ask him cold feel\n" +
                "met spot shy want. Children me laughing we prospect answered followed. At it went\n" +
                "is song that held help face.",
            paragraph2: "Now residence dashwoods she excellent you. Shade being under his bed her, Much\n" +
                "read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant\n" +
                "horrible but confined day end marriage. Eagerness furniture set preserved far\n" +
                "recommend. Did even but nor are most gave hope. Secure active living depend son\n" +
                "repair day ladies now."},
    ],
    dataCards = [
        {icon: {cardsPhoto1} , title: 'Solimo Coffee Beans 2 kg', price: 10.73, iconNum: 'iconCard1'},
        {icon: {cardsPhoto2}, title: 'Presto Coffee Beans 1 kg', price: 15.99, iconNum: 'iconCard2'},
        {icon: {cardsPhoto3}, title: 'AROMISTICO Coffee 1 kg', price: 6.99, iconNum: 'iconCard2'},
    ]

function AppCoffeeHouse(props) {
    return (
        <div>
            <AppInfo dataInfo={dataInfo}/>
            <AppAboutUs dataAbout={dataAbout}/>
            <AppProduct dataCards={dataCards}/>
            <AppFooter iconMenu={iconMenuBlack} iconInfo={icon2}/>
        </div>
    );
}

export default AppCoffeeHouse;