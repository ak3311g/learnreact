import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/HeaderComp";
import Introduction from "./components/reacttopics/Intro";
import ReactTopics from "./components/Topics";
import JSX from "./components/reacttopics/jsx";
import "./App.css";
import Home from "./components/Homepage";
import Components from "./components/reacttopics/Compo";
import Props from "./components/reacttopics/props";
import States from "./components/reacttopics/states";
import Lifecycle from "./components/reacttopics/Lifecycle";
import Hooks from "./components/reacttopics/hooks";
import Events from "./components/reacttopics/events";
import Router from "./components/reacttopics/Router";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="bg-body-secondary">
          <Header/>
          <ReactTopics />
          {/* Introduction to React JS */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/JSX" element={<JSX/>} />
            <Route path="/Components" element={<Components/>} />
            <Route path="/Props" element={<Props/>} />
            <Route path="/State" element={<States/>} />
            <Route path="/Lifecycle" element={<Lifecycle/>} />
            <Route path="/Hooks" element={<Hooks/>} />
            <Route path="/Events" element={<Events/>} />
            <Route path="/Router" element={<Router/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
