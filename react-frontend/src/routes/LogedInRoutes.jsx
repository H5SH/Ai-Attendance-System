import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import NavBar from "../utilities/NavBar";




const LogedInRoutes = () => (
    <Routes>
        <Route path='*' element={<Navigate to='/dashboard/home' />} />
        <Route path='/dashboard/home' element={
            <>
                <NavBar />
                <Routes>
                    <Route path="home" element={<Dashboard />}/>
                </Routes>
            </>
        } />
    </Routes>

)

export default LogedInRoutes