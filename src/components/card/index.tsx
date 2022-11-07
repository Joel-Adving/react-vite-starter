import style from './card.module.css'

interface Props {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return <div className={style['card']}>{children}</div>
}
