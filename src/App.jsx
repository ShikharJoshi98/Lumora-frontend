import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPageLayout } from "./layouts/LandingPageLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageLayout />}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
