import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Introduction from './components/Introduction';
import Basics from './components/Basics'
import Work from './components/Work'
import Dishes from './components/Dishes'



function App() {

  return (
    <>
<div className="background-img">
<Header />
<Introduction />
</div>
<Basics />
<Work />
<Dishes />
</>
  )  
}

export default App
