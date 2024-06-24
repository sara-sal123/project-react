import axios from "axios";
import meetingStore from "./meetingStore";
import Swal from "sweetalert2";

export async function getMeetings() {

    try {
        const meetings = await axios.get(' http://localhost:8787/appointments');
        meetingStore.setMeetings(meetings.data);

    } catch (error) {
        console.error('Error:', error);
    }


}
export const addMeetingServer = async (meeting) => {
    try {
        const res = await axios.post('http://localhost:8787/appointment', meeting);
      
            meetingStore.addNewMeeting(meeting);
            Swal.fire("הפגישה נקבעה בהצלחה");
        
    }
    catch {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "תאריך זה כבר תפוס",

    });

    return 'failed'
}
}
