import { NavLink } from "react-router-dom";
import { Button, Tab, Tabs, TextField } from "@material-ui/core";
import { styles } from "./style";

export const Profile = () => {
  const classes = styles();
  return (
    <h1 className={classes.wrapper}>
      Profile Compoennt <NavLink to="/user">User</NavLink>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        className="clicke-btn"
        classes={{}}
      >
        Click me!
      </Button>
      <button>normal</button>
      <TextField className="input-element" />
      <input />
      <Tabs>
        <Tab classes={{ selected: "selected-tab" }}>Hello</Tab>
        <Tab>Hello 2</Tab>
      </Tabs>
    </h1>
  );
};
