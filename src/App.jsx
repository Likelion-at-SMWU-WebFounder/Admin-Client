import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ApplicationStatusPage from "./pages/recruit/ApplicationStatusPage";
import PassedApplicantsPage from "./pages/recruit/PassedApplicantsPage";
import DocumentItemsPage from "./pages/recruit/DocumentItemsPage";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import DocumentItemsEditPage from "./pages/recruit/DocumentItemsEditPage";
import DocumentDetailPage from "./pages/recruit/DocumentDetailPage";
import InterviewTimePage from "./pages/recruit/InterviewTimePage";
import PassFinalPage from "./pages/recruit/PassFinalPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/sooklion-admin/login" element={<LoginPage />} />
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
          <Route
            path="/sooklion-admin/editdocument"
            element={<DocumentItemsEditPage />}
          />
          <Route
            path="/sooklion-admin/apply/:joinerId"
            element={<DocumentDetailPage />}
          />
          <Route
            path="/sooklion-admin/interview"
            element={<InterviewTimePage />}
          />
          <Route
            path="/sooklion-admin/pass-final"
            element={<PassFinalPage />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
