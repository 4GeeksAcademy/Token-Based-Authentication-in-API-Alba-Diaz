import { Register } from "../components/Register"
import { Link } from "react-router-dom";

export const RegisterPage = () => {










    return (

        <>
        <div className="text-center">

            <h3>Register</h3>
            <Register />
            <p>If you already have an account, please <Link to={'/login'}> log in</Link></p>
        </div>
        </>

    )



}