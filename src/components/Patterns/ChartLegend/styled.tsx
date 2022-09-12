import styled from "styled-components";
import { colors, properties } from "../../../assets/theme";

export const Square = styled.div`
height: 25px;
width: 25px;
border: 1px solid ${colors.bg.white};
border-radius: ${properties.radius.light};
background-color: ${(props: { color: string; }) => props.color};
`

export const ItemWrapper = styled.div`
display: flex;
margin: 5px;
padding: 5px;
border-radius: ${properties.radius.extlight};
color: ${colors.txt.primary};
background: ${colors.bg.secondary};
align-items: center;
justify-content: center;
&:hover{
    background: ${colors.bg.tertiary};
    transform: translateY(-.2rem);
}
`