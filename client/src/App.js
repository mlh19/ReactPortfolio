
import './App.css';
import { useState } from 'react';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Footer from './pages/Footer';
import NavTabs from './pages/NavTabs';

export default function App() {
 
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };
  

  return (
    <div>
      <div> <Header /> </div>
      <div>

      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      
      {renderPage()}
      </div>

      <div><Footer /></div>
       
    </div>
  );
 
}