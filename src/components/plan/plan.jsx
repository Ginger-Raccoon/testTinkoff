import s from './plan.module.css';
import classNames from 'classnames';


export const Plan = ({title, cards}) => {
  return (
    <div className={s.container}>
      <h2 className={classNames(s.title, 'title')}>{title}</h2>
      <div className={s.cards}>
        {
          cards.map((e) => {
            return(
              <ul className={s.card}>
                <h3 className={classNames(s.card__title, 'title')}>{e.title}</h3>
                  {e.list.map((i) => {
                    return(
                      <li className={classNames(s.item, 'text')}>{i.item}</li>
                    )
                  })}
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}