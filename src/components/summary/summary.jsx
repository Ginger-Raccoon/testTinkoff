import s from './summary.module.css'
import classNames from 'classnames'


export const Summary = ({title, article}) => {
  return (
    <div className={s.container}>
      <h2 className={classNames('title')}>{title}</h2>
      <ul className={s.list}>
          {article.map((e, id) => {
            return (
              <li className={s.item} key={id}>
                <div className={s.img} style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/' + e.img})`}} />
                <div className={s.inform}>
                  <h4 className={classNames(s.title, 'text')}>{e.title}</h4>
                  <p className={classNames(s.subtitle, 'text')}>{e.subtitle}</p>  
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}