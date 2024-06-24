import { useEffect, useState } from "react";
import {
  Button, Dialog, DialogActions,
  DialogContent, DialogTitle, Fab, TextField
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import servicesStore from "../../data/servicesStore";
import { addServiceToServer } from "../../data/servicesServer";
import "./service.css"




function AddService() {
  useEffect(() => {
    setNewService({ ...servicesStore.services })
  }, [servicesStore.services]);


  const [newService, setNewService] = useState({});
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  function handleAddService(e) {
    e.preventDefault();
    addServiceToServer(newService).then(x => {
      setOpen(false)
    })
  }


  function handleService(e) {
    const { id, value } = e.target;
    setNewService({ ...newService, [id]: value })

  }
  return (
    <>
      <div className="iconOfAddService">
        <Fab onClick={handleClickOpen} title="הוספת שירות"> < AddIcon /></Fab>
      </div>
      <Dialog
        className="addService"
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
        }}
      >
        <DialogTitle>

        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleAddService}>


            <div>
              <TextField
                fullWidth
                label="שם השירות"
                id="name"
                value={newService.name}
                onChange={handleService}
                variant="standard"
                sx={{ m: 1, width: '30ch' }}
              />
            </div>
            <div>

              <TextField
                multiline
                rows={4}
                label="תאור השירות"
                id="description"
                value={newService.description}
                onChange={handleService}
                variant="standard"
                sx={{ m: 1, width: '30ch' }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="מחיר "
                id="price"
                value={newService.price}
                onChange={handleService}
                variant="standard"
                sx={{ m: 1, width: '30ch' }}
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="משך הפגישה "
                id="duration"
                value={newService.duration}
                onChange={handleService}
                variant="standard"
                sx={{ m: 1, width: '30ch' }}
              />
            </div>
          </form>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose} >Cancel</Button>
          <Button onClick={handleAddService}>Save</Button>
        </DialogActions>
      </Dialog>



    </>
  )
}

export default AddService