
import { observer } from "mobx-react"
import { useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import servicesStore from "../../data/servicesStore"
import { getServices } from "../../data/servicesServer"

//איך מראה את הדיפןלטיבי

const ServicesListLink = observer(() => {
  useEffect(() => {
    getServices()
  }, [])

  return (
    <>
      <h3>רשימת השירותים שלנו:</h3>
    
      {servicesStore.services.map
        (x => <div key={x.id}><Link to={`${x.id}/`}>
          {`${x.id}`}:{x.name} ,
        </Link></div>)}

      {Outlet}

    </>
  )
})

export default ServicesListLink