import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";




const LogedInRoutes = () => (
    <Routes>
        <Route path='*' element={<Navigate to='/dashboard' />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>

)

export default LogedInRoutes