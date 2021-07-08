// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import WorkPage from "./pages/workPage/WorkPage";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/mywork">
          <WorkPage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
