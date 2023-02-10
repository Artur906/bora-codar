import { StyledButton } from "./styled";

export default function Button(props) {
  return (
    <StyledButton
      onClick={props.callback}
      background={props.background}
      color={props.color}
    >
      {props.type == 'svg' ? <img src={props.path} /> : props.value}
    </StyledButton>
  )
}