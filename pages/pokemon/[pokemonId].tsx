import { CardProps } from '../../components/Card'
import Image from "next/image"
import styles from '../../styles/Pokemon.module.css'
import { ReactChild, ReactFragment, Key } from 'react'

export const getStaticPaths = async() =>{

  const maxPokemons = 252
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  const paths = data.results.map ((pokemon: any, index: number) => {
    return{
      params: { pokemonId: (index + 1).toString() },
    }
  })

  return{
    paths,
    fallback: false,
  }

}

export async function getStaticProps(context: { params: { pokemonId: any }}) {
  
  const id = context.params.pokemonId
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()

  return {
    props: {pokemonss: data}, 
  }
}

export default function Pokemon({pokemonss}:any) {
  return(
    
    <div className={styles.pokemon_container}>
            <h1 className={styles.title}>{pokemonss.name}</h1>

      <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemonss.id}.png`}
      width="300"
      height="400"
      alt={pokemonss.name}
      />
      <div>
        <h3>Número: {pokemonss.id}</h3>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemonss.types.map((item: { type: { name: boolean | ReactChild | ReactFragment | null | undefined } }, index: Key | null | undefined) => (
            <span
              key={index}
              className={`${styles.type} ${styles['type_' + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemonss.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemonss.weight / 10} kg</p>
        </div>
      </div>

    </div>
    
  )
}