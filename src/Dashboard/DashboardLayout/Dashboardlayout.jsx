import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

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
  