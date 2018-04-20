import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

<<<<<<< HEAD
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      exact
=======
const Navbar = () => 
  <div>
    <NavLink 
      to="/"
      exact 
>>>>>>> f07a792c8fed4fd41eb59c3a133a2634af57ff0e
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Home</NavLink>
<<<<<<< HEAD
      <NavLink
        to="/about"
        exact
=======
      <NavLink 
        to="/about"
        exact 
>>>>>>> f07a792c8fed4fd41eb59c3a133a2634af57ff0e
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >About</NavLink>
      <NavLink
        to="/login"
<<<<<<< HEAD
        exact
=======
        exact  
>>>>>>> f07a792c8fed4fd41eb59c3a133a2634af57ff0e
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
        >Login</NavLink>
      </div>;

 const Home = () => <h1>Home!</h1>;
<<<<<<< HEAD

=======
      
>>>>>>> f07a792c8fed4fd41eb59c3a133a2634af57ff0e
 const About = () => <h1>This is my about component!</h1>;


const Login = () => {
  return (
    <div>
      <form>
        <div>
         <input type="text" name="username" placeholder="Username" />
           <label htmlFor="username">Username</label>
        </div>
        <div>
         <input type="password" name="password" placeholder="Password" />
         <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

ReactDOM.render((
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
