import react from 'react'
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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
  