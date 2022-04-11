
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetails from "./component/CountryDetails";
import CountryList from "./component/CountryList";
import Error from "./component/Error";
import Header from './component/Header';

function App() {
  return (
    <div className="bg-lightModeElement dark:bg-darkModeBackground">    
     <BrowserRouter>
        < Header />
        <Routes>
          <Route path="/countries-decription-app" exact element={< CountryList />} />
          <Route path="/:name" element={< CountryDetails />} />
          <Route path="*" element={< Error />} />
        </Routes>
     
     </BrowserRouter>
      
    </div>
  );
}

export default App;
