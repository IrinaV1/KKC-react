import Aside from "./сomponents/Aside";
import Content from "./сomponents/Content";
import Header from "./сomponents/Header";
import Profile from "./сomponents/Profile"
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

function App() {
  return (
    <div className="App ">
      <div className="wrapper min-vh-100  container-fluid  m-0 p-0" >
     <Aside />

    <div className="container-fluid wrapper-conteiner p-0 d-md-blok ">
     <Header />
     <Content />
     <Profile />
     </div>

     </div>
    
    </div>
  );
}

export default App;
