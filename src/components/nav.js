import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ProjectPage from './ProjectPage';

function Nav(){
    return (
        <div className='main-nav'>
        <Link className='link' to="/">Home Page</Link> 
        <Link className='link' to="/AboutPage">About Page</Link> 
        <Link className='link' to="/ContactPage">Contact Page</Link> 
        <Link className='link' to="/ProjectPage">Project Page</Link> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/ProjectPage" element={<ProjectPage />} />
        </Routes>
        </div>
    )
}
export default Nav;