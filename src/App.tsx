import { Routes, Route } from "react-router";
import Home from "./pages/home";
// import RootLayout from "./layouts/app-layout";

const App = () => {
  return (
    <Routes>
      {/* landing Page */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}

      {/* Application */}

      {/* <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route> */}
    </Routes>
  );
};

export default App;
