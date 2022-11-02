import './appOurCoffee.scss';
import icon from "../../resourse/appIcon/Group.png";
import photo from "../../resourse/appPhoto/coffee-839233_1920.png";
import iconBlack from "../../resourse/appIcon/VectorBlack.png";
import AppForYourPleasure from "../appForYourPleasure/AppForYourPleasure";
import iconMenuBlack from "../../resourse/appIcon/Vector.png";

function AppOurCoffee(props) {
    const dataOurCoffee = [
        {icon: {icon}, title: "For your pleasure"}
    ]

    const dataAboutOur = [
        {photo: {photo}, title: "About our goods", icon: {iconBlack},
            paragraph1: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.",
            paragraph2: "Afraid at highly months do things on at. Situation recommend objection do intention\n" +
                "so questions. \n" +
                "As greatly removed calling pleased improve an. Last ask him cold feel\n" +
                "met spot shy want. Children me laughing we prospect answered followed. At it went\n" +
                "is song that held help face."}
    ],
        dataPhoto = [
            {iconMenu: {iconMenuBlack}, iconInfo: {iconBlack}}
        ]

    return (
        <div className="appOurCoffee">
            <AppForYourPleasure
                dataOutCoffee={dataOurCoffee}
                dataAboutOur={dataAboutOur}
                dataPhoto={dataPhoto}
            />
        </div>
    );
}

export default AppOurCoffee;