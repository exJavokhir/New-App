import routes from "./routes/routes";
import {Routes, Route} from 'react-router-dom'
import './assets/main.scss'

import { Header } from "./container";

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        {
          routes.map((router, index) => (
            <Route path={router.path} exact={router.exact} element={router.component} key={index}/>
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
