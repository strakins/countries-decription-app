
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CountryList from "./component/CountryList";
// import Error from "./component/Error";
import Header from './component/Header';

function App() {
  return (
    <div className="bg-lightModeElement dark:bg-darkModeBackground">    
     <BrowserRouter>
        < Header />
        <Routes>
          <Route path="/" element={< CountryList />} />
          
          {/* <Route path="*" element={< Error />} /> */}
        </Routes>
     
     </BrowserRouter>
      
    </div>
  );
}

export default App;
