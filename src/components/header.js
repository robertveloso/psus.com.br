import React from 'react';
import { useColorMode } from 'theme-ui';
import ColorModeToggle from './colormode-toggle';

import LanguageMenu from './languageMenu';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };
  return (
    <header
      style={{
        display: `flex`,
        justifyContent: `flex-end`,
        alignItems: `center`,
      }}
    >
      <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      <LanguageMenu></LanguageMenu>
    </header>
  );
};

export default Header;
