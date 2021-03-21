import './App.css';
import Home from './containers/home'
import Resume from './containers/resume'
import Projects from './containers/projects'
import NavigationBar from './components/navbar'

import { Route, Redirect, Switch, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="app-background">
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/home"/>
          )}/>
          <Route path='/home' component={Home}></Route>
          <Route path='/resume' component={Resume}></Route>
          <Route path='/projects' component={Projects}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
