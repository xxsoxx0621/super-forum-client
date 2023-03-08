import "./App.css";
import Nav from "./components/areas/Nav";
import Main from "./components/areas/Main";
import RightMenu from "./components/areas/RightMenu";
import SideBar from "./components/areas/sidebar/SideBar";
import LeftMenu from "./components/areas/LeftMenu";

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
