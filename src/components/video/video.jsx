import s from './video.module.css'
import ReactPlayer from 'react-player'
import classNames from 'classnames'
import { playButton } from '../../images'



export const Video = ({title, subtitle, src}) => {
  return (
    <div className={s.container}>
      <h2 className={classNames('title')}>{title}</h2>
      <p className={classNames(s.subtitle, 'text')}>{subtitle}</p>
      <ReactPlayer
        url={src}
        controls={true}
        playing={true}
        light={true}
        width={718}
        height={404}
        playIcon={<img src={playButton} alt={'play button'}></img>}
      />
    </div>
  )
}