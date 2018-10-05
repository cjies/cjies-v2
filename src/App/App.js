import React, { Fragment } from 'react';

import GlobalStyle from './GlobalStyle';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

// Sections
import HomeSection from 'sections/HomeSection';
import AboutSection from 'sections/AboutSection';
import ResumeSection from 'sections/ResumeSection';
import PortfolioSection from 'sections/PortfolioSection';
import SkillSection from 'sections/SkillSection';
import ContactSection from 'sections/ContactSection';

// Normalize default stylesheets
import 'normalize.css/normalize.css';

function App() {
  return (
    <Fragment>
      <GlobalStyle />

      <AppHeader />
      <HomeSection />
      <AboutSection />
      <ResumeSection />
      <PortfolioSection />
      <SkillSection />
      <ContactSection />
      <AppFooter />
    </Fragment>
  );
}
export default App;
