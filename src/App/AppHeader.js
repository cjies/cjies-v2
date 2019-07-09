// @flow
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import HeaderLogoLink from './HeaderLogoLink';
import HeaderNav from './HeaderNav';

import { HOME_SECTION } from 'data/sections';

// $FlowFixMe - ignore custom props error
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 54px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #ededed;

  z-index: 100;
  transition: opacity 0.3s ease-out;

  ${({ isSticky }: { isSticky: boolean }) =>
    !isSticky &&
    css`
      opacity: 0;
      pointer-events: none;
    `};
`;

const HeaderContainer = styled.div`
  display: flex;
  max-width: 980px;
  height: 100%;
  margin: 0 auto;
`;

function AppHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavActivated, setIsNavActivated] = useState(false);

  const handleWindowScroll = () => {
    setIsSticky(window.scrollY > 30);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  /**
   * Prevent body scroll when mobile navigation is activated
   */
  const handleBodyScroll = (isScrollable: boolean) => {
    if (window.innerWidth < 640 && document.body) {
      document.body.style.overflow = isScrollable ? '' : 'hidden';
    }
  };

  /**
   * Deactivate mobile nav
   */
  const handleMobileNavClose = () => {
    handleBodyScroll(true);
    setIsNavActivated(false);
  };

  /**
   * Toggle activated state of mobile nav
   */
  const handleLogoClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
    if (window.innerWidth < 640) {
      e.preventDefault();
    }

    handleBodyScroll(isNavActivated);
    setIsNavActivated(!isNavActivated);
  };

  return (
    <Header isSticky={isSticky}>
      <HeaderContainer>
        <HeaderLogoLink
          href={`#${HOME_SECTION.id}`}
          onClick={handleLogoClick}
        />
        <HeaderNav active={isNavActivated} onClose={handleMobileNavClose} />
      </HeaderContainer>
    </Header>
  );
}

export default AppHeader;
