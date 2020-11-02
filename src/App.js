import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navbar';
// import Banner from './components/carousel';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Profile from './components/profile';
import CreateOrder from './components/createOrder';
import auth from './services/authService';
import Logout from './components/logout';
import ProtectedRoute from './components/common/protectedRoute';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// import Home from './components/home';
// import Hire from './components/hire';
import Homepage from './components/homepage';


class App extends Component {
  state = {  }

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() { 
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user}/>
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/create-order" component={CreateOrder} />
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Homepage} />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
 
export default App;
