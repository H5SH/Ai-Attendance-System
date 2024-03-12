import { useState } from "react"
import { useNavigate, useNavigation } from "react-router-dom"

function NavBar() {

    // const [btnStudent, setBtnStudent] = useState(false)
    const navigate = useNavigate()

    function logOut(){
        localStorage.removeItem('user')
        window.location.reload()
    }

    // function addStudentSwitch(){
    //     setBtnStudent(!btnStudent)
    // }

    return (
        <div className="inline-block align-top">
            <button onClick={()=> navigate('addStudent')} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                AddStudent
            </button>
            <button onClick={logOut} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">LogOut</button>
        </div>
    )
}

export default NavBar