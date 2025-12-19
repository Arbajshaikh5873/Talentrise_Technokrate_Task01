import { useContext } from "react";
import { profileContext } from "./Container";
import AddEdit from "./AddEdit";
import ViewPage from "./ViewPage";

function HomeView({ setCurrentView }) {
  const { profileData } = useContext(profileContext);

  if (profileData.length === 0) {
    return <AddEdit setCurrentView={setCurrentView} />;
  }

  return <ViewPage setCurrentView={setCurrentView} />;
}

export default HomeView;
