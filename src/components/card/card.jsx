import s from './card.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button/button';

export const Card = ({button, buttonText, title, subtitle, theme, time, img, status, id, type, buttonDisabled}) => {
  const navigate = useNavigate()
  const onclick = (() => type === 'theme' ? navigate(`/theme/${id}`) : navigate(`/test/${id}`))
  return (
    <div className={s.card__container}>
      <div className={s.card__main}>
        <div className={s.card__information}>
          <p className={classNames(s.card__theme, status ? s.card__status_unblocked : s.card__status_block, 'text')}>{theme}</p>
          <p className={classNames(s.card__time, 'text')}>{time}</p>
        </div>
        <div className={s.card__description}>
          <h3 className={classNames(s.card__title, 'title')}>{title}</h3>
          <p className={classNames(s.card__subtitle, 'text')}>{subtitle}</p>
        </div>
        {button && <Button disabled={buttonDisabled} click={onclick}>{buttonText}</Button>}
      </div>
      <div className={s.card__img} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/' + img})`}} />
    </div>
  )
}