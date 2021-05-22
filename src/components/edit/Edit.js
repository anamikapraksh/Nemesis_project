import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import {EditUser} from '../../functions/User';

export default function Edit(props) {




    const [name,setUsername] = useState('');
    const [id,setId] = useState(props.id);
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [confirmpassword,setConfirmpass] = useState('');
    const [address,setAddress] = useState('');



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
   handleClose();
    let result;
    // setButtonstate(true)
    const data = {
      name,
      address,
        id,
    };
    try {
      result = await EditUser(data);
    //   localStorage.setItem("AUTH", true);
    //   localStorage.setItem("User_details", JSON.stringify(result));
      console.log(result);
      // window.location.reload();
      window.location.reload();
    } catch (err) {
      console.log(err);
      // setButtonstate(false)
      // setSnack(true)
      // setSuccerr("error")
      // setDescri("Error !");
    }
  };



  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
       <EditIcon></EditIcon>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
           <div>Username:{props.name}</div>
           <div>Email:{props.email}</div>
           <div>Address:{props.address}</div>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Username"
            label="Username"
            fullWidth
            onChange={(e)=>  setUsername(e.target.value)}
          />
          
           <TextField
            
            margin="dense"
            id="email"
            label={props.email}
            type="email"
            fullWidth
            // onChange={(e)=>  setEmail(e.target.value)}
            disabled ="true"
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={(e)=>  setPassword(e.target.value)}
          /> */}
           <TextField
            
            margin="dense"
            id="address"
            label="address"
            fullWidth
            onChange={(e)=>  setAddress(e.target.value)}
          />
        </DialogContent>
        
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CANCEL
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            EDIT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
