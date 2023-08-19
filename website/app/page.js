import styles from './page.module.css'
import NavBar from './components/NavBar';
import CrisisBox from './components/CrisisBox';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <CrisisBox />
      <Footer />
    </div>

  )
}

