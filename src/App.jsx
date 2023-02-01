import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      {/* TODO NAVIBAR */}
      <h1>Rafael Lemos</h1>
      <Sidebar />
      <MainContent />
      {/* TODO CONTACT FORM */}
    </div>
  );
}

export default App;
