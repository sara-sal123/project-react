import { observer } from "mobx-react"
import { useEffect } from "react"
import { getServices } from "../../data/servicesServer"
import servicesStore from "../../data/servicesStore"
import ServiceForUser from "./ServiceForUser"


const ServiceListForUser = observer(() => {
  useEffect(() => {
    getServices()
  }, [])

  return (
    <>
    


      <div className="titleServiceList">
        <h1>השירותים שלנו</h1>
        <div className=" ServiceListForUser">
          {servicesStore.services.map(item => <ServiceForUser service={item} key={item.id} />
          )}
        </div>
      </div>
    </>
  )
})

export default ServiceListForUser