import styled, { keyframes, css } from "styled-components";
import {colors, properties, fonts} from "../../../assets/style/themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimButton, CenterAlignment, componentFill } from "../../../assets/style/gen_styles";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const ModalStyles: any = {
    'normal': {
        'container': css`
            left: 0;
            top: 0;
            ${componentFill}
            background: ${colors.bg.primary50};
        `,
        'content': css`
            background: ${colors.bg.white};
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        `,
        'body': css`
            padding: 1.5em;
        `,
        'header': css`
            background-image: ${colors.bg.secondary};
            padding: 0.75em 0em;
        `,
        'close': css`
            top: 0.75em;
            right: 1.25em;
            padding: 0.25em;
        `,
    },
    'alert': {
        'container': css`
            right: 0.5em;
            top: 1em;
            width: 15em;
            item-align: center;
        `,
        'content': css`
            background: ${colors.bg.primary50};
        `,
        'body': css`
            width: 15em;
            font-size:${fonts.size.small};
            padding: 0.5em;
        `,
        'header': css`
            width: 15em;
            background: ${colors.bg.alert};
            padding: 0.25em 0em;
        `,
        'close': css`
            top: 1.25em;
            right: 2em;
            padding: 0.25em;
        `,
    }
}

const ModalContainer = styled.div`
    z-index: 2;
    position: fixed;
    ${(props: { styling: string, show: boolean})=>ModalStyles[props.styling].container};
    animation: ${(props: { styling: string, show: boolean})=>props.show?fadeIn:''} 0.3s linear;
`

const Content = styled.div`
    position: fixed;
    border-radius: ${properties.radius.medium};
    ${(props: { styling: string; }) =>
        ModalStyles[props.styling].content}
`

const Header = styled.div`
    ${(props: { styling: string; }) =>
        ModalStyles[props.styling].header};
    color: ${colors.txt.primary};
    ${CenterAlignment}
    font-family: ${fonts.primary};
    font-weight: 900;
    border-radius: ${properties.radius.medium} ${properties.radius.medium} 0px 0px;
`;

const Body = styled.div`
    ${(props: { styling: string; }) =>
        ModalStyles[props.styling].close};
    ${CenterAlignment}
`;

const Close = styled(FontAwesomeIcon)`
    position: fixed;
    ${(props: { styling: string; }) =>
        ModalStyles[props.styling].close};
    ${AnimButton}
`

export {
    ModalContainer,
    Content,
    Header,
    Body,
    Close
}
