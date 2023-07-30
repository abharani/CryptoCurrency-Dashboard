import PieChart from "./components/ChartTypes/PieChart"
import GlobalCurrency from "./components/GlobalCurrency"
import Header from "./components/Header"
import SearchBar from "./components/Search/SearchBar"
import Sidebar from "./components/Sidebar"
import MainChart from "./components/MainChart/MainChart"
import Exchange from "./components/Exchange"

function App() {
   return (
      <div className='flex flex-col gap-5 w-full h-screen'>
         <div className="w-full shadow-lg px-6 py-3">
            <Header />
         </div>
         <div className="lg:h-[830px] xl:h-[930px] bg-[#f3f8ff] flex flex-col lg:flex-row justify-between gap-5 w-[96%] max-w-[1440px] mx-auto p-5 rounded-lg">
            <div className="w-full lg:w-[72%] flex-1 flex flex-col space-y-4 h-full">
               <div className="flex gap-5">
                  {/* The global currency component */}
                  <GlobalCurrency />
                  {/* The search bar component */}
                  <SearchBar />
               </div>
               <div className="bg-white border border-gray-300 rounded-lg w-full px-5 py-4 grow shadow-md">
                  {/* The main chart component */}
                  <MainChart />
               </div>
               <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-white border border-gray-300 rounded-lg w-full">
                     {/* The pie chart component */}
                     <PieChart />
                  </div>
                  <div className="bg-white border border-gray-300 rounded-lg w-full">
                     {/* The exchange component */}
                     <Exchange />
                  </div>
               </div>
            </div>
            <div className="h-full relative bg-white px-5 border border-gray-300 rounded-lg w-full lg:w-[28%] space-y-6 overflow-y-clip shadow-md">
               <div className="border-b border-gray-300">
                  <h1 className="text-2xl md:text-3xl text-center py-2 lg:text-xl font-semibold">Cryptocurrency by market Cap</h1>
               </div>
               <div className="md:h-[500px] w-full lg:h-full overflow-y-scroll scrollbar-hide">
                  {/* The sidebar component */}
                  <Sidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default App
