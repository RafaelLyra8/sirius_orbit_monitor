import styled from "styled-components";
import { colors, properties } from "../../../assets/theme";

interface led{
    state: boolean;
}

export const LedWrapper = styled.button`
    background: ${(props: led) => props.state?
        colors.led.on.normal:colors.led.off.normal};
    border-radius: ${properties.radius.high};
    border: none;
    width: 25px;
    height: 25px;
    margin: 5px;
    &:hover{
        background: ${(props: led) => props.state?
            colors.led.on.hover:colors.led.off.hover};
    }
`;
