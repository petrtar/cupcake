import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';


function AddBookModal(props) {
    let data = {}
    const [values, setValues] = React.useState({
        age: 0,
    });

    const handleChange = name => event => {
        if (event.target.value < 0) event.target.value = 0;
        setValues({ ...values, [name]: event.target.value });
    };

    const getData = () => {
        data = {
            age: values.age,
            info: props.bookInfo
        }
        props.dispatch({
            type: "ADD_BOOKS",
            data
        });
        props.close()
    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    item xs={9}>
                    <span>Добавить книгу {props.bookInfo.title} в корзину</span>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="outlined-number"
                        label="Количество"
                        value={values.age}
                        type="number"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange('age')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" onClick={getData}>
                В корзину
            </Button>
        </div>
    )
}

export default connect()(AddBookModal);