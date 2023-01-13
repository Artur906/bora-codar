import { useState } from "react"
import { StyledHeader, Nav, HeaderContainer } from "./styled"

export default function Header(props) {
  const [selectedPage, setSelectedPage] = useState(JSON.parse(sessionStorage.getItem("page")) ?? props.items[0])

  const handlePageSelector = (item) => {
    setSelectedPage(item)
    sessionStorage.setItem("page", JSON.stringify(item))
    return
  }

  return (
    <StyledHeader>
      <HeaderContainer>
        <h1>#BoraCodar</h1>
        <Nav>
          <ul>
            {
              props.items.map((item) => {
                return (
                  <li
                    key={item.props.to}
                    onClick={() => handlePageSelector(item)}
                    className={selectedPage.props.to === item.props.to && window.location.href.match(item.props.to) ? "selected-page" : ""}
                  >
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </Nav>
        <a href="https://boracodar.dev/" className="external-link">Participa também!🚀</a>
      </HeaderContainer>
    </StyledHeader>


  )
}