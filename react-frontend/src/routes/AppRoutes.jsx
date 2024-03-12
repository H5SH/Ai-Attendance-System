import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogedInRoutes from './LogedInRoutes'
import LogedOutRoutes from './LogedOutRoutes'
import App from '../App'



const AppRoutes = () => {

    const userState = localStorage.getItem('user')
    

    return (
        <div className='min-h-full h-screen flex py-12 px-4 sm:pz-6 lg:px-8'>
            <div className='max-w-md w-full space-y-8'>
                <BrowserRouter>
                    <Routes>
                        <Route element={<App />} />
                        {userState ?
                            <Route path='*' element={<LogedInRoutes />} /> :
                            <Route path='*' element={<LogedOutRoutes />} />
                        }
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default AppRoutes