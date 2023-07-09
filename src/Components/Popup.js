import {
  DialogContent,
  DialogTitle,
  Dialog,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Control from "../Controls/Control";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
    left: theme.spacing(50)
  },
  dialogTitle: {
    padding: "0px",
  },
}));
function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();
  return (
    <Dialog
      open={openPopup}
      maxWidth="lg"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle classes={useStyles.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Control.ActionButton
            color="secondary"
            onClick={() => setOpenPopup(false)}
          >
            <CloseIcon />
          </Control.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
