import { observer } from 'mobx-react-lite';
import data from '../../store/data';
import s from './main.module.css'
import { Header } from '../header/header'
import { main_header } from '../../images';
import { Description } from '../description/description';
import { Card } from '../card/card';



export const Main = observer(() => {
  return (
    <>
      <Header
        title={'Скорая помощь при стрессе'}
        subtitle={`Курс о том, как справляться с ежедневными \nстрессовыми ситуациями`}
        img={main_header}
        button={true}
        buttonText={'Начать учиться'}
      />
      <div className={s.main__container}>
        <Description
          title={'О курсе'}
          subtitle={'Каждый может столкнуться со стрессом.'}
        >
          <p className={'text'}>{`Команда Тинькофф подготовила курс для всех, кто хочет узнать, как быстро возвращать себя
в ресурсное состояние.`}</p> 
          <p className={'text'}>{`Нам есть, что тебе рассказать: мы более 5 лет создаем электронные курсы в Тинькофф, создали
более 300 учебных продуктов от навыков работы с возражениями до лонгридов по работе
со стрессом. В этом курсе мы объединили многолетний опыт и все накопленные
знания  команды по эмоциональному комфорту`}</p>
        </Description>
        {
          data.theme.map((e) => {
            return(
              <Card
                id={e._id}
                type={e.type}
                theme={e.theme}
                time={e.time}
                status={e.status}
                title={e.title}
                subtitle={e.subtitle}
                button={e.button}
                buttonText={e.buttonText}
                buttonDisabled={!e.status}
                img={e.img}
              />  
            )
          })
        }
      </div>
    </>
  )
})
