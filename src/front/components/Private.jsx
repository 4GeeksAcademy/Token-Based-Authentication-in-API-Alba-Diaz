import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import userServices from "../services/userServices"
import { useNavigate } from "react-router-dom"

export const Private = () => {
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return navigate('/login')
        }
        userServices.getUserInfo().then(data => {
            if (!data.success) {
                return navigate('/login')
            }
            dispatch({ type: 'getUserInfo', payload: data.user })
        })
    }, [])

    const handleLogout = () => {
        dispatch({ type: 'logout' })
        navigate('/')

    }

    return (
        <>
            <div>

                {store.user &&

                    <h4>Hello {store.user.email} ! </h4>
                }
              
                <button type="button" className="btn btn-danger mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Logout</button>

            </div>



            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure you want to log out? </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleLogout}>Yes</button>
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>



        </>


    )
}