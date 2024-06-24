import BusinessData from "../businessData/BusinessData"
import Footer from "../footer/Footer"
import Gym from "../gym/Gym"
import ServiceListForUser from "../services/ServiceListForUser"
import {Box} from '@mui/material'


function User() {
 
    return (
      <>
      <Box sx={{boxSizing: 'border-box', margin: 0, top: 0, direction: 'rtl'}}>
      {/* פרטי העסק + לוגו,כל סוגי הפגישות עם התאור שלהם + כפתור לקביעת פגישה */}
      
      <BusinessData/>
     
       <Gym/>

     <ServiceListForUser />
     
      <Footer/>
      </Box>
      </>
    )
  }
  
  export default User