import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  color: black;
`;

export const Header = (props: HeaderProps) => {
  return (
    <StyledHeader> 
      <Head>
        <title>test</title>
        <meta property="og:title" content="Learn programming in 60 days" />
        <meta
          property="og:description"
          content="Thinking about a carreer switch? Start our programming course today! You learn the skills, we earn your money."
        />
        <meta property="og:image" content="https://www...." />
        <meta property="og:type" content="article" />
      </Head> 
    </StyledHeader>
  );
};

export default Header;
