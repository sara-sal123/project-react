import { useEffect, useState } from "react"
import { observer } from "mobx-react";
import Swal from 'sweetalert2'
import EditNoteIcon from '@mui/icons-material/EditNote';
import {
  Button, Dialog, DialogActions,
  DialogContent, DialogTitle, Fab, TextField
} from "@mui/material";
import "./business.css"
import { postBusiness } from "../../data/buiisnessDataServer";
import BuisesDataStore from '../../data/buiisnessDataStore'



const EditBusinessData = observer(() => {
  const [open, setOpen] = useState(false);
  const [newBusinessData, setnewBusinessData] = useState({});



  useEffect(() => {
    setnewBusinessData({ ...BuisesDataStore.data })
  }, [BuisesDataStore.data]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmit = () => {
    if (newBusinessData.name != "") {
      setOpen(false);
      Swal.fire({
        title: "האם הנך בטוח שברצונך לשמורהאת השינויים?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {

        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          postBusiness(newBusinessData).then(x=>{
           })
          handleClose
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
          handleClose
        }
       
      });
      
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    } 



  }

  function handleBusiness(e) {
    const { id, value } = e.target;
    setnewBusinessData({ ...newBusinessData, [id]: value });
  }
  return (
    <>
    <div className="buttonEditBusinessData">
    <Fab title="עריכת פרטי העסק"  aria-label="edit" onClick={handleClickOpen}>
    
    <EditNoteIcon  />
      </Fab>
    </div>
      
      {/* שדות לעריכת פרטי העסק מחדש ועידכון הנתונים בסרבר */}
      <Dialog
       
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form'
        }}
      >
        <DialogTitle> שינוי פרטי העסק </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                fullWidth
                label="שם:"
                id="name"
                value={newBusinessData.name}
                onChange={handleBusiness}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="כתבת:"
                id="address"
                value={newBusinessData.address}
                onChange={handleBusiness}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="טלפון"
                id="phone"
                value={newBusinessData.phone}
                onChange={handleBusiness}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="owner"
                id="owner"
                value={newBusinessData.owner}
                onChange={handleBusiness}
                variant="standard"
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="description"
                id="description"
                value={newBusinessData.description}
                onChange={handleBusiness}
                variant="standard"
              />
            </div>
          </form>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
          >Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  )
})

export default EditBusinessData