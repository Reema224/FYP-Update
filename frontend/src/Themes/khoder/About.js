import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import AboutPage from './components/AboutPage';

import "./App.css";

import ScrollToTop from './components/ScrolToTop';

import { dark } from '../../styles/Theme';

const App = () => {
  return (
    <>
    <ScrollToTop />

  <ThemeProvider theme={dark}>
        <AnimatePresence exitBeforeEnter>
        <AboutPage />
        </AnimatePresence>
      </ThemeProvider>
</>
  )
}

export default App