import Main from "./Main.js";
import About from "./About.js";
import {Routes, Route, Link} from 'react-router-dom';

export default function Nav() {
    return (
<div>
<nav>
    <ul>
        <li> <img src="/img/logosmall.png" alt="logo"></img> </li>
        <li><Link to ="/" className="nav-item">Home</Link></li>
        <li><Link to ="/about" className="nav-item">About</Link></li>
        <li><Link to ="/menu" className="nav-item">Menu</Link></li>
        <li><Link to ="/reservations" className="nav-item">Reservations</Link></li>
        <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
        <li><Link to ="login" className="nav-item">Login</Link></li>
    </ul>
</nav>
<Routes>
<Route path="/" element={<Main />} />
<Route path="/about" element={<About />} />
</Routes>
</div>)}
