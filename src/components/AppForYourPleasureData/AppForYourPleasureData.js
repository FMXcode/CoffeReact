import icon from "../../resourse/appIcon/Group.png";
import photo from "../../resourse/appPhoto/girl-865304_1920.jpg";
import iconBlack from "../../resourse/appIcon/VectorBlack.png";
import iconMenuBlack from "../../resourse/appIcon/Vector.png";
import AppForYourPleasure from "../../pages/appForYourPleasure/AppForYourPleasure";

function AppForYourPleasureData(props) {
    const dataOutCoffee = [
        {icon: {icon}, title: "Our Coffee"}
    ]

    const dataAboutOur = [
            {photo: {photo}, title: "About our beans", icon: {iconBlack},
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
        <div>
            <AppForYourPleasure
                dataOutCoffee={dataOutCoffee}
                dataAboutOur={dataAboutOur}
                dataPhoto={dataPhoto}
            />
        </div>
    );
}

export default AppForYourPleasureData;