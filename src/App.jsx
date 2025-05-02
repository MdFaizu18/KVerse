import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import KDramaPage from "./pages/KDramaPage"
import KPopPage from "./pages/KPopPage"
// import BLSeriesPage from "./pages/BLSeriesPage"
// import WatchlistPage from "./pages/WatchlistPage"
// import JournalPage from "./pages/JournalPage"
// import QuizPage from "./pages/QuizPage"
// import ProfilePage from "./pages/ProfilePage"
import { ThemeProvider } from "./contexts/ThemeContext"
import "./index.css"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="k-drama" element={<KDramaPage />} />
            <Route path="k-pop" element={<KPopPage />} />
            {/* <Route path="bl-series" element={<BLSeriesPage />} />
            <Route path="watchlist" element={<WatchlistPage />} />
            <Route path="journal" element={<JournalPage />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="profile" element={<ProfilePage />} /> */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

