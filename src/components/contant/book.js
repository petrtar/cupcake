import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import AddBookModal from './book/addBookModal.js';
import ModalMore from './book/modalMore.js';




const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  media: {
    height: 300,
    padding: "none"
  },
  main: {
    height: '100%',
  }
});


function Book(props) {
  const classes = useStyles();
  const [openModalAdd, setOpenModalAdd] = React.useState(false);
  const [openModalMore, setOpenModalMore] = React.useState(false);

  const handleClickOpenModalAdd = () => {
    setOpenModalAdd(true);
  };

  const handleCloseModalAdd = () => {
    setOpenModalAdd(false);
  };

  const handleClickOpenModalMore = () => {
    setOpenModalMore(true);
  };

  const handleCloseModalMore = () => {
    setOpenModalMore(false);
  };




  return (
    <div className={classes.main}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" variant="contained" color="primary" onClick={handleClickOpenModalAdd}>
            Купить
          </Button>
          <Button size="small" variant="contained" color="primary" onClick={handleClickOpenModalMore}>
            Подробнее
          </Button>
          <span>{props.price}</span>
        </CardActions>
      </Card>
      <div>
        <Dialog
          open={openModalAdd}
          onClose={handleCloseModalAdd}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">Добавить в корзину</DialogTitle>
          <DialogContent>
            <AddBookModal bookInfo={props} close={handleCloseModalAdd} />
          </DialogContent>
        </Dialog>
        <Dialog
          open={openModalMore}
          onClose={handleCloseModalMore}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">Подробнее</DialogTitle>
          <DialogContent>
            <ModalMore bookInfo={props} close={handleCloseModalMore} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Book;