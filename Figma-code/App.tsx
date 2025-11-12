import { Hero } from "./figma/components/Hero";
import { About } from "./figma/components/About";
import { Gallery } from "./figma/components/Gallery";
import { OrderForm } from "./figma/components/OrderForm";
import { Footer } from "./figma/components/Footer";
import { Toaster } from "./figma/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <OrderForm />
      <Footer />
      <Toaster />
    </div>
  );
}
