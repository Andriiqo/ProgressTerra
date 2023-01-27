import styles from './styles.module.css'
import LogoSVG from '../../../app/assets/info.svg'
import { Container } from '../../../shared/ui'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.header__nav}>
          <p className={styles.header__logo}>Логотип</p>
          <button className={styles.header__button}>
            <img className={styles.header__image} src={LogoSVG} alt="logo" />
          </button>
        </nav>
      </Container>
    </header>
  )
}
