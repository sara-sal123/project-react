import { action, makeObservable, observable } from "mobx";

 class meetingStore {
    meetings = [];

    constructor() {
        makeObservable(this, {
            meetings: observable,
            setMeetings: action,
            addNewMeeting: action,
         
        })
    }
     
    setMeetings = (data) => {
        this.meetings = data;
    }

    addNewMeeting = (meeting) => {
        this.meetings = [...this.meetings, meeting];
    }

   
}

export default new meetingStore();


