import s from './header.module.css';
import classNames from 'classnames';
import { Button } from '../button/button';
import { useNavigate } from 'react-router-dom';



export const Header = ({title, subtitle, button, buttonText, img}) => {
  const navigate = useNavigate()
  const onclick = (() => navigate('/theme/1'))
  return (
    <header className={s.main__header}>
      <div className={s.header__container}>
        <div className={s.header__info}>
          <h1 className={classNames( s.header__title, "title")}>{title}</h1>
          <p className={ classNames( s.header__subtitle, "subtitle", "text")}>{subtitle}</p>
          {
            button && <Button className={s.header__button} click={onclick}> {buttonText} </Button>
          }
        </div>
        <img className={s.header__image} src={img}/>
      </div>
    </header>
  )
}