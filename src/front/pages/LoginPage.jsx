import { Login } from "../components/Login"
import { Link } from "react-router-dom";


export const LoginPage = () => {



    return (

        <>
        <div className="text-center">

            <h3>Login</h3>
            <Login />
            <p>Need an account? No problem — just <Link to={'/register'}>Register!</Link></p>
        </div>
        </>


    )



}