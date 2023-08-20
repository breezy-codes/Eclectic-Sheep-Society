import MainNav from "../components/nav";
import CrisisBox from "../components/CrisisBox";
import Footer from "../components/Footer";
import HomePage from "../components/home";

export default function Home() {
  return (
    <div>
      <MainNav />
      <HomePage />
      <CrisisBox />
      <Footer />
    </div>
  );
}
