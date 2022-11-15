import React from 'react'
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import ScrollToTop from './components/ScrolToTop';
import { LightTheme } from './components/Themes';
import GlobalStyle from './globalStyles';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <>
        <ScrollToTop />

          <GlobalStyle />
          <ThemeProvider theme={LightTheme}>

          <AnimatePresence exitBeforeEnter>
 
  <Main />   
  </AnimatePresence>

     </ThemeProvider>
</>
  )
}

export default App