import styles from '../styles/Home.module.css'
import Card, { CardProps } from '../components/Card'

interface PokemonListProps{
  pokemons:CardProps[]
}

export async function getStaticProps (){

  const maxPokemons = 252
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item: { id: any }, index: number) => {
    item.id = index + 1
  })

  return{
     props:{
       pokemons: data.results,
     },
  }
}

export default function Home({ pokemons }:PokemonListProps){
  
  console.log(pokemons)

  return(

    <div className={styles.home}>

      <h1>Cards Pokemon</h1>

      <div className={styles.listpokemon}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id}id={pokemon.id} name={pokemon.name} url={pokemon.url}/>
        ))}
      </div>

    </div>
  )
}