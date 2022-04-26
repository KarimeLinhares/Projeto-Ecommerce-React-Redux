import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <>
            <Grid container direction="row" alignItems="center" xs={12}>
                <Link to="/">
                    <Typography variant='h2'>
                        DioRoid
                    </Typography>       
                </Link>
                <Typography variant='h6'>
                        Nendoroid Shopping
                    </Typography>
            </Grid>     
            <Grid container direction="row" justify='flex-end' alignItems="center" xs={12}>    
                <Link to="/">
                    <h5>Home</h5>
                </Link>
                <Link to="/contato">
                    <h5>Contato</h5>
                </Link>
                <Cart />
            </Grid>  
        </>
            
        
    )
}

export default Header;
