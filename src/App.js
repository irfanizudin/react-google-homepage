import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gmail from "./pages/Gmail";
import Images from "./pages/Images";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gmail" exact component={Gmail} />
                <Route path="/images" exact component={Images} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
