import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/science"
          element={<News key="science" country="in" category="science" />}
        />
      </Routes>
    </div>
  );
}

export default App;
