import React from 'react';
import Menu from '../../components/Menu';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import { useShop } from '../../context/shop'

import CardProduct from '../../components/CardProduct'

import { useStyles } from './styles';
import { mergeClasses } from '@material-ui/styles';
import { CallMissedSharp } from '@material-ui/icons';

function Shop() {
    const { productsShop } = useShop();
    const classes = useStyles({});
    return (
        <>
            <Menu />
            {productsShop.map(item => {
                return (
                    <CardProduct product={item} />
                )

            })}
        </>

    )
}

export default Shop;