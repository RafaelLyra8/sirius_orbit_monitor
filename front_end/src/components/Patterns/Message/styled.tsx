import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors, fonts } from "../../../assets/style/themes";

const TextWrapper = styled.div`
    color: ${colors.txt.primary};
    text-align: center;
    font-family: ${fonts.primary};
    font-size: ${fonts.size.small};
`;

const Icon = styled(FontAwesomeIcon)`
`

export {
    TextWrapper,
    Icon
}
