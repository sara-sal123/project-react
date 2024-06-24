import {useState} from "react";
import {observer} from "mobx-react";
import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {UseValidationForm} from "./useValidationForm";
import { addMeetingServer } from "../../data/meetingServer";


const AddMeeting = observer(({ser}) => {

//ערכים שצריכים להשלח אך לא אמורים להופיע בטופס
  const [newMeeting, setNewMeeting] = useState({
    serviceName: ser.name,
    serviceDescription: ser.description,
    servicePrice: ser.price,
  });

//פונקציות לפתיחה וסגירה של הטופס
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //עדכון של הערכים מהטופס
  function handleMeeting(e) {
    const {id, value} = e.target;
    setNewMeeting({...newMeeting, [id]: value});
  }

//שליחת הטופס
  function handleAddMeeting(e) {
    setNewMeeting({...newMeeting, ...data});
    console.log('aaa');
    console.log(newMeeting);
    addMeetingServer(newMeeting).then(x => {
      setOpen(false)
    })
  }

  const checkPhoneNumber = (val) => {
    //check only digits and +-
    if (/^[0-9-]+$/.test(val)) {
      if (val.match(/[-]/g)) {
        if ((val.match(/[-]/g) || []).length != 1) {
          return false
        }
      }
    } else {
      return false
    }
    return true
  }

  const {handleSubmit, handleChange, data, errors} = UseValidationForm({
    onSubmit: handleAddMeeting,
    data: newMeeting,
    setData: setNewMeeting,
    validations: {
      email: {
        pattern: {
          value: /\S+@\S+\.\S+/,
          messageKey: 'כתובת המייל אינה תקינה',
        },
        required: {
          value: true,
          messageKey: 'חובה להכניס מיל',
        },
      },
      clientName: {
        pattern: {
          value: /^[a-zA-Z \u05D0-\u05EA'-]+$/i,
          messageKey: 'חובה להכניס רק אותיות',
        },
        required: {
          value: true,
          messageKey: 'חובה להכניס שם',
        }
      },
      clientPhone: {
        required: {
          value: true,
          messageKey: 'חובה להכניס טלפון',
        },
        custom: {
          isValid: (value) => checkPhoneNumber(value),
          messageKey: 'מספר הטלפון אינו תיקני',
        },
      },
    },
  });

  return (
    <>
      {/* בלחיצה על הכפתור יפתח הטופס */}
      <Button onClick={handleClickOpen}> לקביעת פגישה</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
        }}
      >
        <DialogTitle>לקביעת פגישה</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            {/*אינפוט להזנת שם המשתמש*/}
            <div>
              <TextField
                required
                fullWidth
                label="clientName"
                id="clientName"
                value={data.clientName}
                onChange={handleChange("clientName")}
                onBlur={handleChange("clientName")}
                variant="standard"
                {...(errors["clientName"] && {
                  error: true,
                  helperText: errors["clientName"]
                })}
              />
            </div>
            {/*אינפוט להזנת טלפון המשתמש*/}
            <div>
              <TextField
                required
                fullWidth
                label="clientPhone"
                id="clientPhone"
                value={data.clientPhone}
                onChange={handleChange("clientPhone")}
                onBlur={handleChange("clientPhone")}
                variant="standard"
                {...(errors["clientPhone"] && {
                  error: true,
                  helperText: errors["clientPhone"]
                })}
              />
            </div>
            {/*אינפוט להזנת אימייל המשתמש*/}
            <div>
              <TextField
                onBlur={handleChange("email")}
                fullWidth
                label="clientEmail"
                id="clientEmail"
                value={data.email}
                onChange={handleChange("email")}
                variant="standard"
                {...(errors["email"] && {
                  error: true,
                  helperText: errors["email"]
                })}
              />
            </div>

            {/*אינפוט להזנת תאריך המשתמש*/}
          
            <label>dateTime:
              <input type="date" id='dateTime' onChange={handleChange("dateTime")} value={data.dateTime}
                     />
            </label>
          </form>
        </DialogContent>

        <DialogActions>
          {/* כפתור חזרה ללא שמירת הנתונים */}
          <Button
            onClick={handleClose}>Cancel</Button>
          {/* כפתור חזרה ל שמירת הנתונים */}
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  )

})

export default AddMeeting