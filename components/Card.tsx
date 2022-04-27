import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Card.module.css'

export interface CardProps{
 
    id:number
    name:string
    url:string
  
}

export default function card({id, name, url}:CardProps){

  return(
    <div className={styles.cards}>

      <Image src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
      width="110"
      height="140"
      alt={name}
      />

      <p>Nº: {id}</p>

      <h3 className={styles.title}>{name}</h3>

      <Link href={`/pokemon/${id}`}>
        <a className={styles.btn}>Detalhes</a>
      </Link> 
    </div>

  )
}