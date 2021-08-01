import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import logo from './assets/tur_logo.JPG'
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Video from './pages/Video';
import Index from '../public/index.html';
const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: 'http://localhost:3001/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        
        <div>
          <header>
          <img src={logo} alt='site logo'/>
          </header>
          <p>Welcome to the TUR family!</p>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path='/Profile' component={Profile}/>
            <Route exact path='/Video' component={Video}/>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
