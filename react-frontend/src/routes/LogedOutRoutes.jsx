import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/loginPage/Login";
import Register from "../components/register/Register";


const LogedOutRoutes = () => (
    <Routes>
        <Route path='*' element={<Navigate to='login' />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/register' element={<Register />} />
    </Routes>
)

export default LogedOutRoutes