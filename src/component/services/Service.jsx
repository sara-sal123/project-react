import { useParams } from "react-router-dom"
import "./service.css"
import servicesStore from "../../data/servicesStore";
import AddMeeting from "../meeting/AddMeeting";
import dataStore from "../../data/dataStore";


function Service(props) {
  const { id } = useParams()
  const service = id ? servicesStore.services.find((e) => e.id == id) : props.service;

  return (
    <>
     
   {service ?
        <div className="card">
          <h3 className="serviceName">{service.name} </h3>
          <p className="aboutService">{service.description}</p>
        </div>: null}
      {!dataStore.isLogin && <AddMeeting ser={service} />}
 


    </>
  )
}

export default Service