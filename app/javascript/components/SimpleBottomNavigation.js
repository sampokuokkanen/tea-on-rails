import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'sticky',
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <a href="/">
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      </a>
      <a href="/teas">
      <BottomNavigationAction label="Nearby" icon={<ListIcon />} />
      </a>
      <a href="/teas/favorites">
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </a>

    </BottomNavigation>
  );
}