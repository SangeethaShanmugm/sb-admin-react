import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              <div className="container-fluid">
                <Switch>
                  <Route path="/" exact={true} component={Dashboard} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
