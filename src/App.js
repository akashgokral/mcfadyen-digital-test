import './App.css';
import "./Styles/Style.css"
import "./Styles/responsive_style.css"
import Center from './Components/Center';
import Footer from './Components/Footer';
import Left from './Components/Left';
import Navbar from './Components/Navbar';
import Right from './Components/Right';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid">
      <div className="row ">
        <div className="col-lg-3">
        <Left/>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
        <Center/>
        </div>
      <div className='right__div col-lg-3'>
        <Right/>
        </div>
        
        </div>
    </div>
    <Footer/>
    
   
    </>
  );
}

export default App;
