import './appForYourPleasure.scss';
import React from "react";
import AppPleasureOurCoffee from "./componentsPleasure/appPleasureOurCoffee/AppPleasureOurCoffee";
import AppPleasureAboutOur from "./componentsPleasure/appPleasureAboutOur/AppPleasureAboutOur";
import AppPleasureFilter from "./componentsPleasure/appPleasureFilter/appPleasureFilter";
import AppPleasureProduct from "./componentsPleasure/appPleasureProduct/AppPleasureProduct";
import AppFooter from "../../components/appFooter/AppFooter";

function AppForYourPleasure({dataOutCoffee, dataAboutOur, dataPhoto}) {
    const {iconMenu, iconInfo} = dataPhoto[0];
    return (
        <div className="appForYourPleasure">
            <AppPleasureOurCoffee dataOutCoffee={dataOutCoffee}/>
            <AppPleasureAboutOur dataAboutOur={dataAboutOur}/>
            <div className="hr"/>
            <AppPleasureFilter/>
            <AppPleasureProduct/>
            <AppFooter
                iconMenu={iconMenu.iconMenuBlack}
                iconInfo={iconInfo.iconBlack}/>
        </div>
    );
}

export default AppForYourPleasure;