import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { ThemeContext } from "../theme/themeContext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const CustomBar = props => {
  const classes = useStyles();
  const themeContext = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClick = themeName => {
    themeContext.handleThemeChange(themeName);
    handleClose();
  };
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Demo
          </Typography>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
          >
            テーマを変更
          </Button>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuClick("DEFAULT")}>
          デフォルト
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick("DARK")}>ダーク</MenuItem>
        <MenuItem onClick={() => handleMenuClick("NAVY")}>ネイビー</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default CustomBar;
