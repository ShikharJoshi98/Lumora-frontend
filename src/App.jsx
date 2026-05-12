import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeLayout from "./layouts/homeLayout"
import LandingPage from "./pages/LandingPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
