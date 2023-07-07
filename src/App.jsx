import { Route, Routes, useLocation } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import DashboardLayout from "./routes/DashboardLayout";
import Overview from "./routes/Overview";
import Stats from "./routes/Stats";
import Worlds from "./routes/Worlds";
import Players from "./routes/Players";
import Traffic from "./routes/Traffic";
import Console from "./routes/Console";
import Settings from "./routes/Settings";

const App = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route errorElement={<ErrorPage />}>
            <Route index element={<Overview />} />
            <Route path="stats" element={<Stats />} />
            <Route path="world" element={<Worlds />} />
            <Route path="player" element={<Players />} />
            <Route path="traffic" element={<Traffic />} />
            <Route path="console" element={<Console />} />
          </Route>
        </Route>

        <Route path="/settings" element={<Settings />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      )}
    </>
  );
};

export default App;
