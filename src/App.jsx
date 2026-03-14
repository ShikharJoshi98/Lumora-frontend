import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPageLayout } from "./layouts/LandingPageLayout";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
