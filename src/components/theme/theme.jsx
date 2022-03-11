import { useParams, Navigate, useNavigate } from 'react-router-dom';
import s from './theme.module.css';
import { Header } from "../header/header"
import { theme } from "../../images"
import data from '../../store/data';
import { Video } from '../video/video';
import { Summary } from '../summary/summary';
import { Reviews } from '../reviews/reviews';
import { Plan } from '../plan/plan';
import { Tips } from '../tips/tips';
import { Card } from '../card/card';
import { Button } from '../button/button';




export const Theme = () => {
  let { id } = useParams()
  let naigate = useNavigate()
  const currentTheme = data.theme.length ? data.theme.find((theme) => theme._id === Number(id)) : null
  const onClick = e => {
    naigate('/')
  }
  if(!currentTheme) {
    return <Navigate to='/404' replace={true}/>
  } else {
    return (
      <>
        <Header
          title={currentTheme.title}
          subtitle={currentTheme.descr}
          img={theme}
          button={false}
        />
        <div className={s.content__container}>
          {
            currentTheme.theme_content.map((e, id) => {
              switch (e.type) {
                case 'video':
                  return (
                    <Video
                      key={id}
                      title={e.title}
                      subtitle={e.subtitle}
                      src={e.src}
                    />
                  )
                case 'summary':
                  return (
                    <Summary 
                      key={id}
                      title={e.title}
                      article={e.article}
                    />
                  )
                case 'reviews':
                  return (
                    <Reviews
                      key={id}
                      title={e.title}
                      reviews={e.reviews}
                    />
                  )
                case 'plan':
                  return (
                    <Plan 
                      key={id}
                      title={e.title}
                      cards={e.cards}
                    />
                  )
                case 'tips':
                  return (
                    <Tips 
                      key={id}
                      title={e.title}
                      tips={e.tips}
                    />
                  )
                case 'test':
                  const test = data.test.find((test) => test._id === e.test_id)
                  return(
                    <Card
                      id={test._id}
                      theme={test.theme}
                      time={test.time}
                      status={test.status}
                      title={test.title}
                      subtitle={test.subtitle}
                      button={test.button}
                      buttonText={test.buttonText}
                      img={test.img}
                    />
                  )  
                default:
                  return(
                    <div>
                      <h1 key={id}>Тестовое выполнил <a href='https://github.com/Ginger-Raccoon' target='_blank' rel="noreferrer">Космачев Илья</a></h1>
                      <Button click={onClick}>В начало</Button>
                    </div>
                  )  
              }
            })
          }
        </div>
      </>
    )
  }

}