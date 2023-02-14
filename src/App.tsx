import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Challenge02 from "./pages/CompletedChallenges/Challenge02"
import Challenges from "./pages/Challenges"
import Home from "./pages/Home"
import Challenge05 from "./pages/CompletedChallenges/Challenge05"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/challenges/02" element={<Challenge02 />} />
          <Route path="/challenges/05" element={<Challenge05 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
