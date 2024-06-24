
import Header from './Components/Header/Header'
import{Outlet, useLocation} from"react-router-dom"
import Footer from './Components/Footer/Footer'

function App() {
  
 const location=useLocation()
 const pathsWithoutHeader = ['/signin','/signup','/profile'];
 const hideHeader=pathsWithoutHeader.includes(location.pathname);

  return (
    <>
    
{!hideHeader && <Header/> /**if hideHeader is not true then render header ,so go further */}
    <Outlet />
    {!hideHeader && <Footer/> /** With non-Boolean values, returns the first falsy value or the last value if all are truthy */}
    </>
  )
}

export default App
