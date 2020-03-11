import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  color: pink;
`;

export const Footer = (props: FooterProps) => {
  return (
    <StyledFooter>
      <h1>Welcome to footer component!</h1>
    </StyledFooter>
  );
};

export default Footer;
