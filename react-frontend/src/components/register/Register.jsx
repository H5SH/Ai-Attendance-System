import { useNavigate } from "react-router-dom"


function Register(){

    const navigate = useNavigate()
    return (
        <>
        <button onClick={()=> navigate('/login')}>Login</button>
        </>
    )
}

export default Register