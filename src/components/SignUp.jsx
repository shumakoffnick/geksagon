import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import {Form} from '../components/Form'
import { setUser } from "store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goBack = ()=>{navigate('/')}
    const handleRegister = (email, password) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) =>{
            console.log(user)
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken
            }));
            goBack()
        })
        .catch(console.error)
    }
    return(
        <>
        <Form title="register" handleClick={handleRegister}/>

        </>
    )
}
export {SignUp}