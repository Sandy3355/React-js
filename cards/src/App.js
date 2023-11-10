import { Products } from './components/products';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import { SidebarData } from './components/SidebarData';
import contents from './content';

export default function App() {
    return(
        <div>
            {/* <Router>

                <Routes>
                    <Route path='/' elements={<Navbar/>}/>
                    <Route path='/SidebarData' elements={<SidebarData/>}/>

                </Routes>
            </Router> */}
        
           <div className='App'>
               {contents.map(contents => (
                   <Products 
                       key={contents.id}
                       image={contents.image}
                       name={contents.name}
                       price={contents.price}
                       totalSales={contents.totalSales}
                       timeLeft={contents.timeLeft}
                       rating={contents.rating}
                   />
               ))}
           </div>
        </div>   
    )
}