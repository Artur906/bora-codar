import { useState } from "react"
import { Link } from "react-router-dom"
import { StyledHeader, Nav, HeaderContainer } from "./styled"


export default function Header() {
  const [selectedPage, setSelectedPage] = useState(window.location.href)

  return (
    <StyledHeader>
      <HeaderContainer>
        <h1>#BoraCodar</h1>
        <Nav>
          <ul>
            <li className={selectedPage.match("challenges") ? " " : "selected-page"}>
              <Link
                to="/"
                onClick={() => setSelectedPage('')}
              >
                Home
              </Link>
            </li>
            <li className={selectedPage.match("challenges") ? "selected-page" : " "}>
              <Link
                to="/challenges"
                onClick={() => setSelectedPage('challenges')}
              >
                Challenges
              </Link>
            </li>
          </ul>
        </Nav>
        <a href="https://boracodar.dev/" className="external-link">Participa também!🚀</a>
      </HeaderContainer>
    </StyledHeader>


  )
}