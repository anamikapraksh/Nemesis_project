import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import DeleteIcon from "@material-ui/icons/Delete";
import { DeleteUser } from "../../functions/User";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Delete(props) {
  const [id, setId] = useState(props.id);

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
      id,
    };
    try {
      result = await DeleteUser(data);
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
      <Button color="primary" onClick={handleClickOpen}>
        <DeleteIcon></DeleteIcon>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Do you want to delete {props.name} ?
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Delete the details?
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CANCEL
          </Button>
          <Button onClick={handleSubmit} color="primary">
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
