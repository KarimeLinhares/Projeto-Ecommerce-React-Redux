import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {
    return(
        <>
            <Grid container direction="row" xs={12}>
                <h3>Fale Conosco</h3>
                <TextField id="name" label="Nome" fullWidth/>
                <TextField id="email" label="Email" fullWidth/>
                <TextField id="message" label="Messagem" fullWidth/>
            </Grid>
            <Button variant="contained" color="primary">
                Sent
            </Button>
        </>
    )
}

export default Contatos;
