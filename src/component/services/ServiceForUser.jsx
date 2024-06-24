
import AddMeeting from "../meeting/AddMeeting"

function ServiceForUser({service}) {
  
  
    return (
      <>
       
     {service ?
          <div className="serviceForUser" >
            <h3 >{service.name} </h3>
            <p >{service.description}</p>
            <AddMeeting ser={service} />
          </div>: null}
      
      </>
    )
  }
  
  export default ServiceForUser