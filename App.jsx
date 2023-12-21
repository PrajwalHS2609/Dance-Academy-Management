import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./NavBar/Nav";
import Home from "./Home";
import Gallery from "./Gallery";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import AdminReg from "./Admin/AdminRegister";
import ProtectedRoute from "./ServicesRoutes/ProtectedRoute";
import AdminDashboard from "./Admin/AdminDashboard";
import AddAcademyManager from "./Admin/AddAcademyManager";
import ViewAcademyManager from "./Admin/ViewAcademyManager";
import ViewAcademy from "./Admin/ViewAcademy";
import ViewBranch from "./Admin/ViewBranch";
import ViewCourse from "./Admin/ViewCourse";
import ViewEachManager from "./Admin/ViewEachManager";
import UpdateManager from "./Admin/UpdateManager";
import AddAcademy from "./Admin/AddAcademy";
import UpdateAcademy from "./Admin/UpdateAcademy";
import AddBranch from "./Admin/AddBranch";
import BranchUpdate from "./Admin/BranchUpdate";
import AddCourse from "./Admin/AddCourse";
import UpdateCourse from "./Admin/UpdateCourse";
import BranchPage from "./BranchPage";
import UserCourse from "./UserCourse";
import MembershipReg from './MembershipReg';
const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminreg" element={<AdminReg />} />
          <Route path="/admindash" element={<AdminDashboard />}>
            <Route
              path="/admindash/addmanager"
              element={<AddAcademyManager />}
            />
            <Route
              path="/admindash/viewmanager"
              element={<ViewAcademyManager />}
            />
            <Route
              path="/admindash/viewmanager/vieweachmanager/:id"
              element={<ViewEachManager />}
            />
            <Route
              path="/admindash/viewmanager/vieweachmanager/updatemanager/:id"
              element={<UpdateManager />}
            />
            <Route
              path="/admindash/viewmanager/vieweachmanager/addacademy/:id"
              element={<AddAcademy />}
            />
            <Route path="/admindash/viewacademy" element={<ViewAcademy />} />
            <Route
              path="/admindash/viewacademy/updateacademy/:id"
              element={<UpdateAcademy />}
            />
            <Route
              path="/admindash/viewacademy/addbranch/:id"
              element={<AddBranch />}
            />
            <Route path="/admindash/viewbranch" element={<ViewBranch />} />
            <Route
              path="/admindash/viewbranch/updatebranch/:id"
              element={<BranchUpdate />}
            />
            <Route
              path="/admindash/viewbranch/addcourse/:id"
              element={<AddCourse />}
            />
            <Route path="/admindash/viewcourse" element={<ViewCourse />} />
            <Route path="/admindash/viewcourse/updateCourse/:id" element={<UpdateCourse/>} />
          </Route>
          <Route path="/branchpg" element={< BranchPage/>}/>
        
          <Route path="/usercourse/:id" element={<UserCourse/>} />
<Route path="/membership/:id" element={<MembershipReg/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
