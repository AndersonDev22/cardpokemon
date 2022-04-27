import styles from '../styles/Main.module.css'
import Footer from "./Footer"
import Navbar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps){
  
  return(
    <div>
      <Navbar/>
        <main className={styles.main}>
          <h1>{children}</h1>
        </main>
      <Footer/>
    </div>
  )
}