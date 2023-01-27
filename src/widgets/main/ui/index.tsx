import { FC, ReactNode } from 'react'
import styles from './styles.module.css';

export const Main: FC<{children: ReactNode}> = ({children}) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}