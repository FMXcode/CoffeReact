import './App.css';
import React from "react";

import AppCoffeeHouse from "../../pages/appCoffeHouse/AppCoffeeHouse";
import AppForYourPleasureData from "../AppForYourPleasureData/AppForYourPleasureData";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppOurCoffee from "../../pages/appOurCoffe/AppOurCoffee";
import AppForYourPleasure from "../../pages/appForYourPleasure/AppForYourPleasure";
import AppCardsInfo from "../../pages/appForYourPleasure/componentsPleasure/appCardsInfo/AppCardsInfo";

function App() {
  return (

          <div className="App">
              {/*<AppCoffeeHouse/>*/}
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<AppCoffeeHouse/>}/>
                      <Route path="/CoffeeHouse" element={<AppForYourPleasureData/>}/>
                      <Route path="/OurCoffee" element={<AppOurCoffee/>}/>
                      <Route path="/cardInfo" element={<AppCardsInfo/>}/>
                  </Routes>
              </BrowserRouter>
          </div>

  );
}

export default App;
