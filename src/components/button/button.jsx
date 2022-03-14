import s from './button.module.css'
import classNames from 'classnames'



export const Button = ({children, click, className, type, disabled, style}) => {
  return (
    <button
    type={type}
    className={classNames(s.button, className, disabled ? s.button_type_disabled : '')}
    onClick={((e) => click(e))}
    disabled={disabled}
    style={style}
    >
      { children }
    </button>
  )
}