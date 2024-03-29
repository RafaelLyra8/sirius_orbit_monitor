import styled from "styled-components";
import { AnimButton, AnimButton2 } from "../../../assets/style/gen_styles";
import { colors } from "../../../assets/style/themes";

const Table = styled.table`
    width: 100%;
`;

const Select = styled.button`
    ${AnimButton2}
    margin: 0rem 0.2rem;
    padding: 0rem 0.5rem;
`


const Header = styled.button`
    background: ${colors.btns.btn1.normal};
    padding: .08rem .8rem;
    margin: 0.5em 0em;
    ${AnimButton}
`;

export {
    Table,
    Select,
    Header
}
