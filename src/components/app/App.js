import './App.css';
import React from "react";
import AppCoffeeHouse from "../../pages/appCoffeHouse/AppCoffeeHouse";
import AppForYourPleasure from "../../pages/appForYourPleasure/AppForYourPleasure";
import AppCardsInfo from "../../pages/appForYourPleasure/componentsPleasure/appCardsInfo/AppCardsInfo";
import AppOurCoffee from "../../pages/appOurCoffe/AppOurCoffee";
import icon from "../../resourse/appIcon/Group.png";
import photo from "../../resourse/appPhoto/girl-865304_1920.jpg";
import iconBlack from "../../resourse/appIcon/VectorBlack.png";
import iconMenuBlack from "../../resourse/appIcon/Vector.png";
import AppForYourPleasureData from "../AppForYourPleasureData/AppForYourPleasureData";



function App() {
  return (
    <div className="App">
        <AppCoffeeHouse/>
        {/*<AppForYourPleasureData/>*/}
        {/*<AppCardsInfo/>*/}
        {/*<AppOurCoffee/>*/}
    </div>
  );
}

export default App;
