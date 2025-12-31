import MainLayout from "./layout/mainLayout"
import Hero from "./pages/home"
import Products from "./pages/product"
import About from "./pages/about"

function App() {
  return (
    <MainLayout>
      <Hero />
      <Products />
      <About />
    </MainLayout>
  )
}

export default App