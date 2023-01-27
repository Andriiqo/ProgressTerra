import styles from './styles.module.css'

export const Spinner = () => {
  return (
    <div className={styles['spinner-wrapper']}>
      <div className={styles['lds-ring']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
