import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/nav.module.scss';

export default function Navigation() {
  return (
    <div>
      <NavLink to={'/setting'}
        className={styles['nav__item']}
      >Настройки</NavLink>
      <NavLink to={'/users'}
        className={styles['nav__item']}
      >Пользователи</NavLink>
    </div>
  )
}
