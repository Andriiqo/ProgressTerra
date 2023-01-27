import { FC } from 'react';
import { floorResponseBonus, parseDateResponse } from '../../../shared/lib';
import fireSVG from '../../../app/assets/fire.svg'
import styles from './styles.module.scss'
import { useAppSelector } from '../../../shared/hooks/useAppSelector';

export const Modal: FC = () => {
  const { data } = useAppSelector((state) => state.bonus)

  return (
      <div className={styles.modal}>
        <div className={styles.modal__info}>
          <h2 className={styles.modal__title}>{floorResponseBonus(data.currentQuantity)} бонусов</h2>
          <div className={styles.modal__description}>
            <p className={styles.modal__text}>{ parseDateResponse(data.dateBurning)}&nbsp;сгорит&nbsp;</p> 
            <img src={fireSVG} alt="fire" />
            <p className={styles.modal__text}>&nbsp;{floorResponseBonus(data.forBurningQuantity)}&nbsp;бонусов</p>
          </div> 
        </div>
        <button className={styles.modal__button}></button>
      </div>
  )
}
