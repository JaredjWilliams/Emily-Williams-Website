import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { OrderForm } from "./components/OrderForm";
import { Footer } from "./components/Footer";
import { Toaster } from "./ui/sonner";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <OrderForm />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App

