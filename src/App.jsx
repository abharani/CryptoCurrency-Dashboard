import CurrencySelector from "./components/CurrencySelector"
import Searchbar from "./components/searchContainer/Searchbar"
import ChartContainer from "./components/chartContainer/ChartContainer"
import PieChart from "./components/PieChart"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Exchange from "./components/exchange/Exchange"

function App() {

   return (
      <div className="w-full ">
         <div className="w-full">
            <Header />
         </div>
         {/* bg-[#fafbff] */}
         <div className="bg-[#fafbff] w-[90%] sm:mx-auto rounded-md  mt-6  px-10 py-6">
            <div className="lg:flex  lg:gap-10  w-full">
               <div className=" lg:w-2/3 xl:w-4/6 xl:pl-14">
                  <div className="flex pt-4 sm:gap-2">
                     <CurrencySelector />
                     <Searchbar />
                  </div>
                  <div className=" bg-white shadow-md mt-4 rounded-md">
                     <ChartContainer />
                  </div>
                  <div className="mt-4 flex flex-col  md:flex-row md:gap-5 xl:gap-2">
                     <PieChart />
                     <Exchange />
                  </div>
               </div>
               <div className="mt-4 mb-4 lg:items-center xl:pr-14 xl:content-center  xl:w-2/6">
                  <Sidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default App
