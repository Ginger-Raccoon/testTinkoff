import s from './result.module.css';
import classNames from 'classnames';
import data from '../../store/data';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { Button } from '../button/button';
import { Card } from '../card/card';




export const Result = () => {
  let { id } = useParams()
  let navigate = useNavigate()
  const currentTest = data.test.length ? data.test.find((test) => test._id === Number(id)) : null
  const res = currentTest.correct >= currentTest.minimum_score 
  const nextTheme = data.theme.find((theme) => theme._id === currentTest.next_theme)
  const onClick = event => {
    currentTest.correct = 0
    currentTest.total = 0
    navigate(`/test/${id}`)
  }

  if(currentTest.correct === currentTest.minimum_score) {
    currentTest.complete = true
    nextTheme.status = true
  }

  if(!currentTest) {
    return <Navigate to='/404' replace={true}/>
  } else {
    return(
      data.result.map((e, indx) => {
        return (
          <div className={s.page}>
            <div className={s.container} key={indx}>
              <h2 className={classNames('title', s.title)}>{currentTest.correct}/{currentTest.total} баллов</h2>
              <div 
              className={s.img} 
              style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/' + (res ? e.img_success : e.img_failure)})`}}
            />
            <p className={classNames('text', s.text)}>{res ? e.text_success : e.text_failure}</p>
            {
              !res && 
              <Button 
                click={onClick}
                className={s.button}
              >
                Пройти еще раз
              </Button>
            }
            </div>
            {
              <Card
                id={nextTheme._id}
                theme={nextTheme.theme}
                time={nextTheme.time}
                status={nextTheme.status}
                title={nextTheme.title}
                subtitle={nextTheme.subtitle}
                button={nextTheme.button}
                buttonText={nextTheme.buttonText}
                buttonDisabled={!nextTheme.status}
                img={nextTheme.img}
                type={nextTheme.type}
              />
            }
          </div>
        )
      })
    )
  }
}