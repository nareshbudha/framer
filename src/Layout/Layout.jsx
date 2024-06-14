import react from 'react'
import Footer from './Footer';
import Sidebar from './Sidebar';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
      <div className="">
        <Header />
        <div className="">
          <Navbar />
          <main className="">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Layout;
  