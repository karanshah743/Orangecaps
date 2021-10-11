import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Home from "./pages/Home/home";
import Team from "./pages/Team/team";
import Feedback from "./pages/Feedback/feedback";
import Events from "./pages/Events/event";
import Contact from "./pages/ContactUs/contact";
import Blogs from"./pages/Blogs/blog";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={ Home } exact/>
          <Route path="/team" component={ Team } exact/>
          <Route path="/feedback" component={ Feedback } exact/>
          <Route path="/events" component={ Events } exact/>
          <Route path="/contact" component={ Contact } exact/>
          <Route path="/blogs" component={ Blogs } exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;