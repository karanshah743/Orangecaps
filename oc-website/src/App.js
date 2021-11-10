import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home/home";
import Team from "./pages/Team/team";
import Feedback from "./pages/Feedback/feedback";
import Events from "./pages/Events/event";
import Contact from "./pages/ContactUs/contact";
import Blogs from "./pages/Blogs/blog";
import Navigation from './components/navigation';
import Footer from './components/mainfooteter';
import Benefits from "./pages/Benefits/benefits"
import Courses from "./pages/Courses/courses"
import Services from "./pages/Services/services"

function App() {

  return (
    <div className="App">
      <Router>

        <Navigation/>

        <Switch>
          <Route path="/" component={ Home } exact/>
          <Route path="/team" component={ Team } exact/>
          <Route path="/feedback" component={ Feedback } exact/>
          <Route path="/events" component={ Events } exact/>
          <Route path="/contact" component={ Contact } exact/> 
          <Route path="/blogs" component={ Blogs } exact/>
          <Route path="/benefits" component={ Benefits } exact/>
          <Route path="/courses" component={ Courses } exact/>
          <Route path="/services" component={ Services } exact/>
        </Switch>

        <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
