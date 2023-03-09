import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/Home";

function App() {
  const renderHome = (props: any) => <Home {...props} />;
  return (
    <Switch>
      <Route exact={true} path="/" render={renderHome} />
      <Route path="/categorythreads/:categoryId" render={renderHome} />
    </Switch>
  );
}

export default App;
