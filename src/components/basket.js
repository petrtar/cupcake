import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Basket(props){
    let booksList;
    let check = '';

    const deleteBooks = id => event => {
        if (typeof id == 'string'){
            props.dispatch({
            type: "DELETE_BOOKS",
            id
          });
        }
      }


    if (props.books.length > 0){
        
        booksList = props.books.map((book)=>{
            return (
                <li style={{listStyleType:"none"}} key={book.info.id}>
                    <Grid   container spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                    <Grid item xs={8}>
                        <h3>{book.info.title}</h3>
                    </Grid>
                    <Grid item xs={2}>
                        <h3>{book.age}шт.</h3>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="secondary"  onClick={deleteBooks(book.info.id)}>
                            Удалить
                        </Button>
                    </Grid>
                    </Grid>
                </li>
            )
        })
        
        check = <Button variant="contained" color="primary">
                    Оформить заказ
                </Button>
    } else {
        return booksList = <h3>Корзина пуста</h3>
    }
    
    return (
        <div>
            <h1>Корзина</h1>
            <ul>
                {booksList}
            </ul>
            {check}
        </div>
    )
}

function mapStateToProps (state) {
    return {
        books: state
    }
  }

export default connect(mapStateToProps)(Basket);