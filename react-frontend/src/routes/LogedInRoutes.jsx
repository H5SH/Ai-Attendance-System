import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import NavBar from "../utilities/NavBar";
import AddStudent from "../components/Student/AddStudent";




const LogedInRoutes = () => (
    <Routes>
        <Route path='*' element={<Navigate to='/dashboard/home' />} />
        <Route path='/dashboard/*' element={
            <>
                <NavBar />
                <Routes>
                    <Route path="home" element={<Dashboard />}/>
                    <Route path="addStudent" element={<AddStudent />} />
                </Routes>
            </>
        } />
    </Routes>

)

export default LogedInRoutes