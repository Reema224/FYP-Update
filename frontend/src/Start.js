import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Projects from './PorfolioBuilder/components/Projects';
import Profile from './PorfolioBuilder/components/Profile';
import Experience from './PorfolioBuilder/components/Experience';
import AboutDetails from './PorfolioBuilder/components/About';
import Skill from './PorfolioBuilder/components/Skill';
import Cardx from './PorfolioBuilder/Cardx';
import Menu from './Components/Menu';
import Themes from './sections/Themes';
import ProductPage from './sections/ProductPage';
import Portfolio from './Themes/Rima/Porfolio1';
import Rima2 from './Themes/Rim2';
import Index from './Themes/khoder/App';
import MySkillsPage from './Themes/khoder/Skills';
import About from './Themes/khoder/About';
import WorkPage from './Themes/khoder/Works';
import Project from './Themes/khoder/Blogs';

function start() {
  return (
    <div>
      <Routes>
        <Route path="/Product-Screen" element={<ProductPage />} />
        <Route path="/Profile-Details" element={<Profile />} />
        <Route path="/Card" element={<Cardx />} />
        <Route path="/Project-Details" element={<Projects />} />
        <Route path="/Experience-Details" element={<Experience />} />
        <Route path="/Skill-Details" element={<AboutDetails />} />
        <Route path="/About-Details" element={<Skill />} />
        <Route path="/" element={<App />} />

        <Route path="/Theme1" element={<Portfolio />} />
        <Route path="/Theme2" element={<Rima2 />} />

        <Route path="/Theme3/:id" element={<Index />} />
        <Route path="/Theme4/myskills/:id" element={<MySkillsPage />} />
        <Route path="/Theme3/about/:id" element={<About />} />
        <Route path="/Theme3/work/:id" element={<WorkPage />} />
        <Route path="/Theme3/blog/:id" element={<Project />} />

        {/* <Route path="/khoder/myskills" element={<MySkillsPage />} />
      <Route path="/khoder/about" element={<About />} />
      <Route path="/khoder/work" element={<WorkPage />} />
      <Route path="/khoder/blog" element={<Project />} /> */}
      </Routes>
    </div>
  );
}

export default start;
