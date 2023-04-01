import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom"

import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Termsandcondition from "./pages/terms&conditions/terms&conditions"
import Copyright from "./pages/copyright/copyright"
import Privacy from "./pages/privacy/privacy"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" exact element={<Home />} />
        <Route
          path="/terms&conditions"
          exact
          element={<Termsandcondition />}
        />
        <Route
          path="/copyright"
          exact
          element={<Copyright />}
        />
        <Route
          path="/privacy"
          exact
          element={<Privacy />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
