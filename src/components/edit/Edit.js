import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import EditUser from '../../functions/User';

export default function Edit() {


    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [confirmpassword,setConfirmpass] = useState('');
    const [address,setAddress] = useState('');



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
           Edit the details
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
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={(e)=>  setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={(e)=>  setPassword(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            fullWidth
            onChange={(e)=>  setPassword(e.target.value)}
          />
        </DialogContent>
        
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CANCEL
          </Button>
          <Button onClick={handleClose} color="secondary">
            EDIT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
