import { useState } from "react"

function NavBar() {

    const [btnStudent, setBtnStudent] = useState(false)

    function logOut(){
        localStorage.removeItem('user')
        window.location.reload()
    }

    function addStudentSwitch(){
        setBtnStudent(!btnStudent)
    }

    return (
        <div>
            <button onClick={addStudentSwitch} className={!btnStudent ? "focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" :
                "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"}>
                AddStudent
            </button>
            <button onClick={logOut} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">LogOut</button>
        </div>
    )
}

export default NavBar