import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Book from './contant/book.js'
import {booksList} from '../json.js'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: 50
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));


function Contant(){
    const classes = useStyles();
    const propsBoks = booksList.books.map((book)=>{
        return (
            <Grid key={book.isbn13}  item xs={12} sm={4}>
                <Book  title={book.title} subtitle={book.subtitle} price={book.price} image={book.image} url={book.url} id={book.isbn13}/>
            </Grid>
        )
    })
    return (

    <div className={classes.root}>
        <Grid container spacing={3}>
            {propsBoks}
        </Grid>
    </div>
        
    )
}

export default Contant;