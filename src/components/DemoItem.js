import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  item: {
    display: "flex",
    width: "100%"
  },
  chips: {
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));

const DemoItem = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.item} elevation={1}>
      <Box p={2}>
        <Typography variant="h2">タイトル</Typography>
        <Box pt={2}>
          <Typography variant="body1">
            私は今日どうぞどんな脱却事として訳の時を飛びですあり。いよいよ次第を随行院は時々その発展たませかもをするからじまいましよりは説明起したますから、そうとはいうですないますでし。
          </Typography>
        </Box>
        <Box textAlign="right" pt={1} className={classes.chips}>
          <Chip label="サンプル1" variant="outlined" color="secondary" />
          <Chip label="サンプル2" color="secondary" />
        </Box>
      </Box>
    </Paper>
  );
};

export default DemoItem;
