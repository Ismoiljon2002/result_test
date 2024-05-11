import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NavbarComponent from "./components/NavbarComponent"
import TopNavbarComponent from "./components/TopNavbarComponent"
import FooterSection from "./sections/FooterSection"

function App() {

  return (
    <>
      <BrowserRouter>
      <TopNavbarComponent />
      <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />

        </Routes>
      
      </BrowserRouter>
      <FooterSection />
    </>
  )
}

export default App
