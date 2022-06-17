import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useState } from "react";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: "5%",
    buttom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vh",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));
const Add = () => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip aria-label="add" title="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autocomplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="title"
                size="small"
                style={{ width: "100%" }}
              />
              <TextField
                style={{ width: "100%" }}
                id="outlined-multiline-static"
                defaultValue="Tell your story"
                multiline
                label="description"
                variant="outlined"
                size="small"
                maxRows={6}
              />
            </div>

            <div className={classes.item}>
              <TextField select label="visibility" value="public">
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">private</MenuItem>
                <MenuItem value="public">Unlisted</MenuItem>
              </TextField>
            </div>

            <div className={classes.item}>
              <FormLabel id="demo-radio-buttons-group-label">
                who can share stories ?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="everybody"
                  control={<Radio size="small" />}
                  label="everybody"
                />
                <FormControlLabel
                  value="myfriends"
                  control={<Radio size="small" />}
                  label="myfriends"
                />
                <FormControlLabel
                  value="nobody"
                  control={<Radio size="small" />}
                  label="nobody"
                />
              </RadioGroup>
            </div>

            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "2rem" }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>

      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
