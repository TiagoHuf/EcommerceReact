import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

const CardProduct = ({ product }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={`${product.image}`}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {product.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                </div>
            </div>

        </Card>
    )
}

export default CardProduct;