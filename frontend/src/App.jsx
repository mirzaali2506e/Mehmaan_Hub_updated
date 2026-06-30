import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PropertyDetails from "./pages/PropertyDetails";
import AddProperty from "./pages/AddProperty";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import MyProperties from "./pages/MyProperties";
import EditProperty from "./pages/EditProperty";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

     <Route
  path="/property/:id"
  element={<PropertyDetails />}
/>
        <Route
  path="/edit-property/:id"
  element={
    <ProtectedRoute>
      <EditProperty />
    </ProtectedRoute>
  }
/>



        <Route
  path="/my-properties"
  element={
    <ProtectedRoute>
      <MyProperties />
    </ProtectedRoute>
  }
/>

      <Route
  path="/add-property"
  element={
    <ProtectedRoute>
      <AddProperty />
    </ProtectedRoute>
  }
/>

       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>

    
  );
}




export default App;