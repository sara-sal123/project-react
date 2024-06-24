import { useEffect } from "react";
import { observer } from "mobx-react";
import "./business.css"
import "../../App.css"
import businessLogo from "../../assets/images/logo/businessLogo.jpg";
import { getBusiness } from "../../data/buiisnessDataServer";
import BuisesDataStore from '../../data/buiisnessDataStore'
import dataStore from "../../data/dataStore";
import EditBusinessData from "./EditBusinessData";

const BusinessData = (observer(() => {
  useEffect(() => {
    getBusiness()
  }, [])


  return (
    <>
      {/* נתוני פרטי העסק שעודכנו עי בעל העסק כולל הלוגו
     עם לינק לעריכת פרטי העסק מחדש */}
      <div className="header"></div>
      <header className="headerBusiness">

        <div >
          <div >
            <h1 className="businessName"> {BuisesDataStore.data.name}</h1>
          </div>

          <div className="BusinessDetails">
            <h2>כתבת:  {BuisesDataStore.data.address}</h2>
            <h2>טלפון:  {BuisesDataStore.data.phone}</h2>
            <h2>בעלים:  {BuisesDataStore.data.owner}</h2>
          </div>
        </div>

        <div>
          <img
            src={businessLogo}
            className="businessLogo"
          />
        </div>

        <div>
          {/* לינק עריכה לבעל העסק בלבד */}
          {dataStore.isLogin && <EditBusinessData />}
        </div>
      </header>


    </>)

}
))

export default BusinessData