import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './Components/Menu';
import Pricing from './Components/Pricing';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import Card from './Components/Card';
function App() {
  const result = [{
    Name: 'Dev Team',
    Number: '70% completed',
    color:'5px solid green'
}, 
{
    Name: 'Contract Employee',
    Number: '60% completed',
    color:'5px solid blue'
},
{
    Name: 'Total Bugs',
    Number: '3',
    color:'5px solid red'
}, 
{
    Name: 'Completed Bugs',
    Number: '1',
    color:'5px solid green'
},
]
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/home' element={<Home/>} >
            <Route path='card' element={<Card data={result}/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='setting' element={<Settings/>}/>
        </Route>
        <Route path='/price' element={<Pricing/>} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <div className='container'> 
    //   <div>
    //    <Menu></Menu>
    //    </div>   
    //   <div style={{marginTop:"20px"}}>
    //   <Home></Home>
    //   </div>
    //   <Pricing/>
    // </div>
    // </div>

  );
}

export default App;
