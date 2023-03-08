import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import LeftMenu from "./components/LeftMenu";
import RightMenu from "./components/RightMenu";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
}

export default App;
