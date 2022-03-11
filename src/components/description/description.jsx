import s from './description.module.css'
import classNames from 'classnames'






export const Description = ({children, title, subtitle}) => {
  return (
    <div className={s.description__container}>
      <h2 className={classNames(s.description__title, 'title')}>{title}</h2>
      <p className={classNames(s.description__subtitle, 'subtitle', 'text')}>{subtitle}</p>
      <div className={classNames(s.description__text, 'text')}>
        {children}
      </div>
    </div>
  )
}