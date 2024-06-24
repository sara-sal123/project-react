import { useEffect } from "react"
import { getServices } from "../../data/servicesServer"

import AddService from "./AddService"
import { observer } from "mobx-react"
import servicesStore from "../../data/servicesStore"
import Service from "./Service"



const ServiceList = observer(() => {
  useEffect(() => {
    getServices()
  }, [])

 
  return (
    <>
   
    <div className="allServices">
        {servicesStore.services.map(item => <Service service={item} key={item.id} />
        )}
      <AddService />
      </div>
     </>
   
  )
})

export default ServiceList