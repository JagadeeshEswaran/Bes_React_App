
// import './App.css'
import LandingPage from './Pages/LandingPage'
import UserAuthentication from './Pages/UserAuthentication'


function App() {
  const isUserLoggedIn = JSON.parse(localStorage.getItem("isUserLoggedIn"))
  

  return (
    <>
      {
        isUserLoggedIn ? <LandingPage /> : <UserAuthentication />
      }      
    </>
  )
}

export default App
