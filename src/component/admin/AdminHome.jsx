
import { observer } from "mobx-react"
import { Link, Outlet } from "react-router-dom"
import BusinessData from "../businessData/BusinessData"
import Footer from "../footer/Footer"
import "./admin.css"
import { Button } from "@mui/material"



const AdminHome = (observer(() => {


  return (
    <>
      {/*, פרטי עסק + לוגו,לינק לשירותי עסק + אפשרות עריכת פרטי עסק 
       לינק לפגישות + אפשרות של קביעת פגישה*/}


        <BusinessData />

        <div className="mainOfAdmin">
          <Button><Link to="services">שירותי העסק</Link></Button>
          <Button><Link to="meetings">פגישות</Link></Button>
        </div>

        <Outlet />

        <Footer />


    </>
  )
}))

export default AdminHome