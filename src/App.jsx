import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ApplicationStatusPage from "./pages/recruit/ApplicationStatusPage";
import PassedApplicantsPage from "./pages/recruit/PassedApplicantsPage";
import DocumentItemsPage from "./pages/recruit/DocumentItemsPage";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/sooklion-admin/login" element={<LoginPage />} />
          {/* <Route element={<Navbar />}> */}
          <Route path="/sooklion-admin" element={<HomePage />} />
          <Route
            path="/sooklion-admin/apply"
            element={<ApplicationStatusPage />}
          />
          <Route
            path="/sooklion-admin/pass"
            element={<PassedApplicantsPage />}
          />
          <Route
            path="/sooklion-admin/document"
            element={<DocumentItemsPage />}
          />
          {/* </Route> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
