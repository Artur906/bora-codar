import { StyledButton } from "./styled";

export default function Button(props) {
  return (
    <StyledButton className="button" onClick={props.callback}>
      {props.value}
    </StyledButton>
  )
}