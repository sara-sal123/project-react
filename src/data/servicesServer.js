import axios from "axios";
import Swal from "sweetalert2";
import servicesStore from "./servicesStore";

async function getServices() {

    try {
        const services = await axios.get(' http://localhost:8787/services');

        servicesStore.setServices(services.data);

    } catch (error) {
        console.error('Error:', error);
    }


}

const addServiceToServer = async (service) => {
    try {
        service.id = String(servicesStore.services.length);
        const res = await axios.post('http://localhost:8787/service', service);
      
            servicesStore.addNewService(service);
            Swal.fire("השירות נוסף בהצלחה");
        

    } catch {
        return 'failed'
    }
}
export { getServices, addServiceToServer };