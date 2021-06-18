import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Route exact path="/">
          <HomePage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
