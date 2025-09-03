import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
      <>
          <Router>
              <div className="min-h-dvh flex flex-col bg-[#f6f6f6]">
                  <Navbar />

                  {/* Contenu des pages */}
                  <main className="flex-1">
                      <Routes>
                          <Route path="/" element={<Home />} />

                      </Routes>
                  </main>

                  <Footer />
              </div>
          </Router>
      </>
  )
}

export default App
