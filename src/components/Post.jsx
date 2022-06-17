import europe from "../images/europe.jpg";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={europe} title="my post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My first post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias, officia. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Explicabo, totam!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
