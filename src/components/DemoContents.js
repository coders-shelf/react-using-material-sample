import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import DemoItem from "./DemoItem";

const DemoContents = () => {
  return (
    <React.Fragment>
      <Box textAlign="center" m={3}>
        <Typography variant="h1">Material UIのデモ</Typography>
      </Box>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <DemoItem />
        </Grid>
        <Grid item xs={12}>
          <DemoItem />
        </Grid>
      </Grid>
      <Box textAlign="center" mt={2}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </React.Fragment>
  );
};

export default DemoContents;
