import { observer } from "mobx-react";
import dataStore from "../../data/dataStore";
import Login from "./Login";
import AdminHome from "./AdminHome";



const AdminPage=(observer(()=>
{

    return (
      <>
      {/* אימות מזהה בעל העסק עי קוד משתמש וסיסמה */}
        {!dataStore.isLogin?<Login/>:<AdminHome/>}
      </>
    )
  }))
 
  export default AdminPage