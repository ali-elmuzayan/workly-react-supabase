import { Routes, Route } from "react-router";
import Home from "./features/landing/pages/home";
import Login from "./features/auth/pages/login";
import Register from "./features/auth/pages/register";
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
