import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Public from "./components/Public"
import Login from "./features/auth/Login"
import DashLayout from "./components/DashLayout"
import Welcome from "./features/auth/Welcome"
import UsersList from "./features/users/UsersList"
import EditUser from "./features/users/EditUser"
import NewUserForm from "./features/users/NewUserForm"
import Prefetch from "./features/auth/Prefetch"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Public/>} />
        <Route path="login" element={<Login/>} />

        <Route element={<Prefetch/>} >
          <Route path="/dash" element={<DashLayout/>} >
            <Route index element={<Welcome/>} />

            <Route path="users"> 
              <Route index element={<UsersList/>} />
              <Route path=":id" element={<EditUser/>} />
              <Route path="new" element={<NewUserForm/>} />
            </Route>

          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
