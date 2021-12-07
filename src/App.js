
import './Styles/App.css';

import MyMenu from './Components/Menu';
import MyProfile from './Components/Profile'
import ImBody from './Components/Body';
import Barra from './Components/Barra';

function App() {
  return (
    <div className="App">
      

      <MyMenu/>
      <MyProfile/>
      <div className="position">
        <Barra/>
      </div>
      <ImBody/>
      <div className="position-down">
        <Barra/>
      </div>
      
      
    </div>
    
  );
 
}

export default App;
