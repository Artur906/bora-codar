import { MouseEventHandler } from "react";
import { StyledButton } from "./styled";

export interface ButtonProps {
  callback: MouseEventHandler<HTMLDivElement> | undefined;
  background?: string,
  color?: string,
  type?: string, 
  path?: string, 
  value?: string | number,
}

export default function Button(props: ButtonProps) {
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