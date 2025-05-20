import { useState } from "react"
import userServices from "../services/userServices"
import { useNavigate } from "react-router-dom"

export const Register = () => {

    const navigate = useNavigate()
    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setError("")
        userServices.register(formData).then(data => {
            if (data.success) {
                navigate('/login');
            } else {
                setError("Email already registered");
            }
        })

    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" value={formData.email} name="email" onChange={handleChange} />
            <input type="password" placeholder="password" value={formData.password} name="password" onChange={handleChange} />
            <input type="submit" value="Send" />
            <div>
                <p className="d-grid">
                    {error && <p className="text-black bg-danger m-1 px-2 mx-auto w-auto border rounded">{error}</p>}
                </p>
            </div>
        </form>

    )
}