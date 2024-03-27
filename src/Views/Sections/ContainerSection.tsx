import React from 'react';
import styles from './styles/section.module.scss';

export default function ContainerSection({
  children
}:{
  children: string | JSX.Element | JSX.Element[]
}) {
  return (
    <div
      className={styles['section__container']}
    >{children}</div>
  )
}
