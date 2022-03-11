import s from './test.module.css';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import data from '../../store/data';
import { useState } from "react";
import { Button } from '../button/button';






export const Test = () => {
  let { id } = useParams()
  let navigate = useNavigate()
  const currentTest = data.test.length ? data.test.find((test) => test._id === Number(id)) : null
  const [count, setCount] = useState(0);
  const currentQuestions = currentTest.questions.length ? currentTest.questions.find((question) => question._id === count) : null
  const [disabled, setDisabled] = useState(true);
  const [selectedId, setSelectedId] = useState()

  const onClick = event => {
    event.preventDefault()
    setSelectedId(' ')

    setDisabled(!disabled)
    if (!currentQuestions.final) {
      setCount(count + 1)
    } else {
      navigate(`/result/${currentTest._id}`)
      
    }
  }
  const onChange = event => {
    setDisabled(!disabled)
    setSelectedId(event.currentTarget.value)
    currentTest.total = currentTest.total + 1
    if (Number(event.currentTarget.value) === Number(currentQuestions.correct_answer)){
      currentTest.correct = currentTest.correct + 1
    }
  }
  function status() {
    if (Number(selectedId) === currentQuestions.correct_answer) {
      return s.correct
    } else {
      return s.incorrect 
    }
  }
  if(!currentTest) {
    return <Navigate to='/404' replace={true}/>
  } else {
    return (
      <div className={s.container}>
        <div className={s.test__information}>
          <p className={classNames(s.answer_count ,'text')}>Вопрос {count + 1}/{currentTest.questions.length}</p>
          <p className={classNames(s.correct_answer_count, 'text')}>Верных ответов {currentTest.correct}/{currentTest.total}</p>  
        </div>
        <div className={s.image} style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/' + currentTest.img_test})`}}/>
        <form name='test' >
          <h2 className={classNames('title', s.title)}>{currentQuestions.title}</h2>
          <fieldset className={s.button__container} disabled={!disabled}>
            {
              currentQuestions.answers.map((e, indx) => {
                return (
                  <label className={classNames(s.radio_label, (e._id === Number(selectedId) ? status() : ''), 'text')} id={e._id} key={indx}>
                    <input
                      type="radio" 
                      name="answer" 
                      value={e._id} 
                      onChange={onChange}
                      checked={Number(selectedId) === e._id}
                      className={classNames(s.radio_input)}
                    />
                    <span className={s.radio_checkmark} />
                    {e.answer}
                    <span id={e._id} className={classNames(s.comment, (e._id === Number(selectedId) ? status() : ''))}>{e.comment}</span>
                  </label>
                )
              })
            }
          </fieldset> 
          <Button disabled={disabled} style={{display: (disabled ? 'none' : 'block')}} click={onClick} type="submit">{currentQuestions.final ? 'Завершить тест' : 'Следующий вопрос'}</Button> 
        </form> 
      </div>
    )
  }
}