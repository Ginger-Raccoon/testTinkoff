import { Link } from "react-router-dom"
import s from './notFound.module.css'




export const NotFound = () => {
  return (
    <div className={s.container}>
      <div className={s.logoWrapper}>
        <Link to="/">
          <img className={s.logo} src="https://www.tinkoff.ru/system/images/logo.svg" alt="Тинькофф Банк"/>
        </Link>
      </div>

      <img className={s.picture} alt="404" src="https://www.tinkoff.ru/system/images/404.svg" />

      <h1 id="title" className={s.title}>Такой страницы нет</h1>

      <div className={s.content}>
        <p>Но есть другая полезная <Link to='/'>страница</Link></p>
      </div>
    </div>
  )
}