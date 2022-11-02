import './appCardsInfo.scss';
import AppPleasureOurCoffee from "../appPleasureOurCoffee/AppPleasureOurCoffee";
import icon from "../../../../resourse/appIcon/Group.png";
import iconMenuBlack from "../../../../resourse/appPhotoCards/Vector.png"
import iconBlack from "../../../../resourse/appIcon/VectorBlack.png";
import photoCoffee from "../../../../resourse/appPhoto/81tGmkXdGLL.png"
import AppFooter from "../../../../components/appFooter/AppFooter";
import AppCardsInfoMain from "../appCardsInfoMain/AppCardsInfoMain";

function AppCardsInfo(props) {
    const dataOurCoffee = [
        {icon: {icon}, title: "Our Coffee"}
    ],
        dataCardsInfoMain = [
            {photo: {photoCoffee}, icon: {iconBlack}, title: "About it", country: "Country: Brasil", description: "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: "Price:  16.99$"}
        ]

    return (
        <div className="appCardsInfo">
            <AppPleasureOurCoffee dataOutCoffee={dataOurCoffee}/>
            <AppCardsInfoMain dataCardsInfoMain={dataCardsInfoMain}/>
            <AppFooter iconMenu={iconMenuBlack} iconInfo={iconBlack}/>
        </div>
    );
}

export default AppCardsInfo;