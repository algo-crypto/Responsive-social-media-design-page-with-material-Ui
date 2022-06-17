import {
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import img1 from "../images/img-1.webp";
import img2 from "../images/img-2.webp";
import img3 from "../images/img-3.webp";
import img4 from "../images/img-4.webp";
import img5 from "../images/img-5.webp";
import img6 from "../images/img-6.webp";
import fr1 from "../images/fr1.jpg";
import fr2 from "../images/fr2.jpg";
import fr3 from "../images/fr3.jpg";
import fr4 from "../images/fr4.jpg";
import fr5 from "../images/fr5.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  imagelist: {
    paddingTop: theme.spacing(2),
    marginBottom: "2rem",
    padding: "2rem 0",
  },
  group: {
    paddingTop: theme.spacing(1),
    marginBottom: "1rem",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: "16px",
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography gutterBottom>Online friends</Typography>
      <AvatarGroup max={4} className={classes.group}>
        <Avatar alt="Remy Sharp" src={fr1} />
        <Avatar alt="Travis Howard" src={fr2} />
        <Avatar alt="Cindy Baker" src={fr3} />
        <Avatar alt="Travis Howard" src={fr4} />
        <Avatar alt="Cindy Baker" src={fr5} />
      </AvatarGroup>

      <Typography className={classes.title}> Gallery</Typography>
      <ImageList rowHeight={100} className={classes.imagelist} cols={3}>
        <ImageListItem>
          <img src={img1} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={img2} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={img3} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={img4} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={img5} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={img6} alt="" />
        </ImageListItem>
      </ImageList>

      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        events
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        movies
      </Link>
    </Container>
  );
};

export default Rightbar;
