import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

interface ISideCard {
  img: string;
  title: string;
  text: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: "flex",
    },
    title: {
      paddingLeft: "5rem",
    },
  })
);

export default function SideTextCard(props: ISideCard) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.content}>
        <img src={props.img} alt="img" />

        <h4 className={classes.title}>{props.title}</h4>
      </div>
      <Typography paragraph>{props.text}</Typography>
    </div>
  );
}
