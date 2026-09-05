import { Routes, Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AuthLayout from "./layouts/auth-layout";
// import RootLayout from "./layouts/app-layout";

const App = () => {
  return (
    <Routes>
      {/* landing Page */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Application */}
      {/* <Route path="/" element={<AppLayout />}></Route> */}
    </Routes>
  );
};

export default App;
