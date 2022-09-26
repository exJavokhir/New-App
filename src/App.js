import routes from "./routes/routes";
import {Routes, Route} from 'react-router-dom'
import './assets/main.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Header } from "./container";

function App() {

  return (
    <div className="App">
      {/* <Header/>s */}
      <Routes>
        {
          routes.map((router) => (
            <Route path={router.path} exact={router.exact} element={router.component}/>
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
