import React from "react";
import * as S from './styled';

type Props = {
  children?: JSX.Element;
}

const Header: React.FC<Props> = ({children}) => {
  return (
    <S.HeaderWrapper>
      {children}
    </S.HeaderWrapper>
  );
};
export default Header;
