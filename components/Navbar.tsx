import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Navbar.module.css'
import Logo from '../public/images/pokemonlogo.png'

export default function Navbar(){
  return(
    <nav className={styles.navbar}>
      
      <div className={styles.containerLogo}>

        <figure className={styles.logo}>
          <Image
            src={Logo} 
            alt="Logo"
          />
        </figure>

      </div>

      <ul>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>Sobre</a></Link>
        </li>
      </ul>

    </nav>

  )
}