import { Navigate } from 'react-router-dom';
import { useIsLoggedIn } from "../hooks"
import "../styles/home.css";
import logo from "../logo.png"


export const Home = () => {
    const {isSignedIn} = useIsLoggedIn();

    if (!isSignedIn) {
       return <Navigate to="/login" />

    }

    return <div className="home-page">
       <div className="logo">
       <img src={logo}width="400" height="auto" className="logo" />
        </div> 
        <span className="heading">Wecome to Cloud Ground Control</span>  
    </div>
     
}