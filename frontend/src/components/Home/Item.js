import React from "react";
import { Paper, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
function Item(props) {
  return (
    <Paper>
      {/* <h2>{props.item.name}</h2>
      <p>{props.item.description}</p> */}
      <Grid container spacing={2}>
        <img src={props.item.image} width="100%" height="500px" />
        {/* <Grid item xs={4}>
          <Button className="CheckButton">Check it out!</Button>
        </Grid> */}
      </Grid>
    </Paper>
  );
}

export default Item;
