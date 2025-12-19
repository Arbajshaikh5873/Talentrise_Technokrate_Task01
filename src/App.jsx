import Navbar from "./components/Navbar";
import AddEdit from "./components/AddEdit";
import ViewPage from "./components/ViewPage";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import HomeView from "./components/HomeView";
import { useState } from "react";
import Container from "./components/Container";

function App() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <Container>
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      {currentView === "home" && <HomeView setCurrentView={setCurrentView} />}
      {currentView === "addEdit" && <AddEdit setCurrentView={setCurrentView} />}
      {currentView === "viewPage" && (
        <ViewPage setCurrentView={setCurrentView} />
      )}
    </Container>
  );
}

export default App;
