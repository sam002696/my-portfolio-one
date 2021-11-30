import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';


// const Header = lazy(() => import('./components/Header'));
// const Hero = lazy(() => import('./components/Hero'));
// const Project = lazy(() => import('./components/Project'));
// const Skill = lazy(() => import('./components/Skill'));
// const Contact = lazy(() => import('./components/Contact'));


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path="/projectDetails/:projectid">
          <ProjectDetails></ProjectDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
