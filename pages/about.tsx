import Image from "next/image";
import ImagemPokemon from '../public/images/Anime.png'
import styles from '../styles/About.module.css'

export default function About(){
  return(
    <div className={styles.container}>
     
      <figure className={styles.imagem}>
        <Image 
          src={ImagemPokemon} 
          alt="Ech"
        />
      </figure> 

    <section className={styles.section}>

      <h1>Sobre o Projeto</h1>

      <p>
      Projeto criado em Next.JS usando TypeScript, CSS e JavaScript
       com o intuito de aprender a usar as chamadas de API, criar 
       rotas dinâmicas, Nested Routes, criar componentes, analisar build,
       view individual entre outras coisas. <br/>Tomei como base as aulas do
       curso de Next.JS do Matheus Battisti, disponibilizadas no youtube, pelo canal Hora de Codar.
      </p>

    </section>  
      
    </div>
  )
}