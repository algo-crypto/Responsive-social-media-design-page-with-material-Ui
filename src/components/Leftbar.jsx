import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  AddAPhoto,
  Chat,
  Collections,
  Home,
  Person,
  PhotoCamera,
  Security,
  Settings,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    color: "#fff",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
    position: "sticky",
    top: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>User</Typography>
      </div>
      <div className={classes.item}>
        <AddAPhoto className={classes.icon} />
        <Typography className={classes.text}>Upload</Typography>
      </div>
      <div className={classes.item}>
        <Chat className={classes.icon} />
        <Typography className={classes.text}>Chat</Typography>
      </div>
      <div className={classes.item}>
        <Security className={classes.icon} />
        <Typography className={classes.text}>security</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Setting</Typography>
      </div>
      <div className={classes.item}>
        <Collections className={classes.icon} />
        <Typography className={classes.text}>Collection</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
