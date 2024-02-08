import {auth, provider} from "../Config/firebase";
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    const res = await signInWithPopup(auth, provider)
    navigate('/Main')
  }

  return(
    <div>
      <p>Login to your account</p>
      <button onClick={signInWithGoogle}>Google</button>
    </div>
  )
}
