import moment from 'moment';
import { Box } from '@mui/system';
import "./meeting.css"




const Meeting = (props) => {
  const meeting = props.meeting;

  const checkColor = (dateTime) => {
    if (!dateTime) {
      return 'white';
    }

    if (new Date(dateTime).toDateString() == new Date().toDateString()) {
      return 'red';
    }

    const now = moment();
    const input = moment(dateTime);
   
    if(now.isoWeek() === input.isoWeek()) {
      return 'yellow';
    }

    return 'pink;'
  }


  return (
    <>


      <Box sx={{
        width: '50%', margin: 'auto',
        borderTop: '10px solid #bebe5e',
        color: "black",
        backgroundColor: checkColor(meeting?.dateTime)
      }}>
        {meeting ?
          <div>
            <form>
              <label>נקבעה עבורך פגישה בנושא: <h4>{meeting.serviceName}</h4> </label>
              <label>מאת:
                <p>{meeting.clientName}</p>
              </label>
              <label>טלפון:
                <p>{meeting.clientPhone}</p>
              </label>
              <label>אימייל:
                <p>{meeting.email}</p>
              </label>
              <label>לתאריך:
                <p>{meeting.dateTime}</p>
              </label>
              <h5>המשך יום מוצלח!!</h5>
            </form>
          </div> : null}
      </Box>



    </>
  )
}

export default Meeting