import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link style={{ color: "#fff", textDecoration: "none"}} to={'/'}>Каталог</Link>
          </Typography>
            <Link  style={{ color: "#fff"}} to={'/Basket'}>
                <Icon>
                    shopping_basket
                </Icon>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}