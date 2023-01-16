import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Header from "./components/Header"
import Challenge02 from "./pages/Challenge02"
import Challenges from "./pages/Challenges"
import Home from "./pages/Home"

const links = [
  <Link to="/">Home</Link>,
  <Link to="/challenges">Challenges</Link>
]

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header items={links} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/challenges/02" element={<Challenge02 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
