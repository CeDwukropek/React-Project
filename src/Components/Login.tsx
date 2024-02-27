import {auth, provider} from "../Config/firebase";
import { getAuth, signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const authenticator = getAuth()
  const user = authenticator.currentUser;

  if(user) {
    console.log("logged")
    navigate('/Main')
  }

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider)
    navigate('/Main')
  }

  return(
    <div>
      <p>Login to your account</p>
      <button onClick={signInWithGoogle}>Google</button>
    </div>
  )
}
