import auth from '../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const useFirebase = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);





    const handleGoogleSignin = () => {
        signInWithGoogle()
    };



    return {
    handleGoogleSignin
    }
};

export default useFirebase;