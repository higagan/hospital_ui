
import './App.css';
import Header from './components/header/Header'

import SignupPage from './components/login/SignupPage'

import LoginPage from './components/login/LoginPage';

import { BrowserRouter as Router , Link,Routes, Route } from 'react-router-dom';
import  SearchBar  from './components/Home/home';
import UserProfile from './components/UserProfile/UserProfile';
function App() {
  return (
    <div className="App">
       
     <Router>
     <Header />
      <Routes>
        <Route exact path="/" Component={SearchBar}>
        
        </Route>
        <Route path="/Login"  Component={LoginPage}>
    
        </Route>
        <Route path="/SignUp"  Component={SignupPage}>

         </Route>

         <Route path="/UserProfile"  Component={UserProfile}>

         </Route>
        
      </Routes>
     </Router>
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
    {/* <Header /> */}
    </div>
  );
}

export default App;
