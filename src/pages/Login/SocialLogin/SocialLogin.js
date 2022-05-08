import React from 'react';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../SocialLogoImg/images/google-logo.png';
import git from '../../../SocialLogoImg/images/git.png';
import yt from '../../../SocialLogoImg/images/yt-logo.png';


const SocialLogin = () => {
    // google sign in 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    // git signin 
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        signInWithGoogle();
    }
    const handleGitSignIn = event => {
        event.preventDefault();
        signInWithGithub();
    }

    let errorElement;
    if (googleError || gitError) {
        errorElement = <p className="text-red-700"> Error: {googleError?.message}{gitError?.message}</p>
    }

    if (gitLoading || googleLoading) {
        return <p>Loading...</p>;
    }
    if (googleUser || gitUser) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className="flex justify-evenly">
                <Link to="" onClick={handleGoogleSignIn}><img className="w-6 h-6" src={google} alt="" /></Link>
                <Link to="" onClick={handleGitSignIn}><img className="w-6 h-6" src={git} alt="" /></Link>
                <Link to="" onClick={handleGitSignIn}><img className="w-7 " src={yt} alt="" /></Link>

            </div>
            {errorElement}
        </div>
    );
};

export default SocialLogin;