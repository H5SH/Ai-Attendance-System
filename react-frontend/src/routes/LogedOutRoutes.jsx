import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/loginPage/Login";
import Register from "../components/register/Register";


const LogedOutRoutes = () => (
    <div className='min-h-full h-screen flex items-center justify-center sm:pz-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
            <Routes>
                <Route path='*' element={<Navigate to='login' />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path='/register' element={<Register />} />
            </Routes>
        </div>
    </div>
)

export default LogedOutRoutes