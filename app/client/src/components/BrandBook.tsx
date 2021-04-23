import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import SideTextCard from "./SideTextCard";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";
import img16 from "../assets/img16.png";
import img17 from "../assets/img17.png";
import img18 from "../assets/img18.png";
import img19 from "../assets/img19.png";
import img20 from "../assets/img20.png";
import img21 from "../assets/img21.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    card: {
      display: "flex",
      justifyContent: "flex-start",
    },
    cardTitle: {
      display: "flex",
      justifyContent: "flex-start",
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      paddingLeft: "30%",
    },
    paragraph: {
        padding: '2rem 0 2rem 0'
    }
  })
);

export default function BrandBook() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div>
        <div className={classes.cardTitle}>
          <h1>Brand Book</h1>
        </div>

        <Typography paragraph className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus.
        </Typography>

        <img src={img1} alt="img1" />

        <Typography paragraph className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus.
        </Typography>
      </div>
      <SideTextCard
        img={img2}
        text={`Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.`}
        title={`VAN HEUSEN LOOK BOOK`}
      />
      <div>
        <div className={classes.cardTitle}>
          <h1>Seasonal Stories</h1>
        </div>
        <Typography paragraph className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus.
        </Typography>
      </div>
      <SideTextCard
        img={img3}
        text={``}
        title={`Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque.`}
      />
      <img src={img4} alt="img4" />
      <div>
        <div className={classes.cardTitle}>
          <h1>Seasonal Colors</h1>
        </div>
        <Typography paragraph className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus.
        </Typography>

        <img src={img5} alt="img5" />
        <img src={img6} alt="img6" />
        <img src={img7} alt="img7" />
      </div>
      <div>
        <div className={classes.cardTitle}>
          <h1>Concept</h1>
        </div>
        <Typography paragraph className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus.
        </Typography>

        <img src={img8} alt="img8" />
        <img src={img9} alt="img9" />
        <img src={img10} alt="img10" />
        <img src={img11} alt="img11" />
      </div>
      <div>
        <div className={classes.cardTitle}>
          <h1>Products</h1>
        </div>

        <img src={img12} alt="img12" />
        <img src={img13} alt="img13" />
        <img src={img14} alt="img14" />
        <img src={img15} alt="img15" />
      </div>
      <div>
        <div className={classes.cardTitle}>
          <h1>Never Tuck</h1>
        </div>

        <img src={img16} alt="img16" />
        <img src={img17} alt="img17" />
      </div>
      <div>
        <div className={classes.cardTitle}>
          <h1>Flex</h1>
        </div>

        <img src={img18} alt="img18" />
        <img src={img19} alt="img19" />
        <img src={img20} alt="img20" />
      </div>
      <div>
        <div className={classes.cardTitle}>
          <h1>Key Looks</h1>
        </div>

        <img src={img20} alt="img20" />
      </div>
      <div>
        <div className={classes.cardTitle}>
          <h1>Product Board</h1>
        </div>

        <img src={img21} alt="img21" />
      </div>
    </main>
  );
}
