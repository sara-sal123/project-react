import { observer } from "mobx-react"
import { useEffect } from "react"
import meetingStore from "../../data/meetingStore"
import { getMeetings } from "../../data/meetingServer"
import Meeting from "./Meeting"



const MeetingList=(observer(()=> {
  useEffect(() => {
    getMeetings()
  }, [])




  

    return (
      <>
        
    
         <div className="allMeetings">
            {
            meetingStore.meetings.slice().sort(function(a,b){
              return new Date(b.dateTime) - new Date(a.dateTime);
            }).map(item => <Meeting meeting={item} key={item.id}/>
            )}
        </div>


      </>
    )
  }))
  

  

export default MeetingList