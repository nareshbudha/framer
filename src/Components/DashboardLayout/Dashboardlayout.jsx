import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Dashboardlayout = ({ children }) => {
    return (
        <div className="flex flex-col">
        <section>
            <Navbar />
        </section>
        <section className="flex flex-col tablet:flex-row">
            <div className="tablet:w-[15%]">
                <Sidebar />
            </div>
            <div className="tablet:w-[85%]">
                {children}
            </div>
        </section>
    </div>
    );
  };
  
  export default Dashboardlayout;
  