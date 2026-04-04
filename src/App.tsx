import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { OrderForm } from "./components/OrderForm";
import { Footer } from "./components/Footer";
import { Toaster } from "./ui/sonner";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Gallery />
        <OrderForm />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App

