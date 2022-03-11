import s from './tips.module.css'
import classNames from 'classnames'


export const Tips = ({title, tips}) => {
  return (
    <div className={s.container}>
      <h2 className={classNames(s.title, 'title')}>{title}</h2>
      <div className={s.tips__container}>
        {
          tips.map((e) => {  
            return (
              <details className={s.details}>
                <summary className={classNames(s.summary, 'text')}>{e.summary}</summary>
                <p className={classNames(s.tip, 'text')} dangerouslySetInnerHTML={{__html: e.tip}} />
              </details>
            )
          })
        }
      </div>
      
      
    </div>
  )
}