import {Fragment} from 'react'
import classes from './HeaderModule.css';
import mealsImg from '../../assets/meals.jpg';
export default function Header() {
  return (
    <Fragment>
        <Header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </Header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt='A table full of delicious food'/>
        </div>
    </Fragment>
  )
}
