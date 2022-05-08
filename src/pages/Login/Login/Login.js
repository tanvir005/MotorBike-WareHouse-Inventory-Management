import React, { useRef, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const date = new Date();

    const [
        signInWithEmailAndPassword,
        emailPassUser,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



    //taking values using useRef
    const emailRef = useRef('');
    const passRef = useRef('');


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleOnClickSignin = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    const handleRestPass = event => {
        const email = emailRef.current.value;
        if (email) {
            sendPasswordResetEmail(email);
            toast("Password Reset Email Send.");
        }
        else {
            toast("Enter email address and try again.");
        }
    }

    let errorElement;
    if (error) {
        errorElement = <p className="text-red-700"> Error: {error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (sending) {
        toast("Sending...");
    }
    if (emailPassUser) {
        navigate(from, { replace: true });
    }

    return (

        <div className="w-full max-w-lg mx-auto mb-10">
            <p className="text-slate-600  font-bold text-5xl my-10">Login Here</p>
            <form onSubmit={handleOnClickSignin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input
                        ref={emailRef}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-pink-500"
                        type="email"
                        placeholder="Username"
                        required
                    />

                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        ref={passRef}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder="password"
                        required />

                    <p className="text-red-500 text-xs italic">{errorElement}</p>
                </div>
                <div className="mb-6">
                    <p className="text-lg italic">Not Registered? <Link className="text-blue-900 hover:underline" to="/register">Register here.</Link></p>
                </div>
                <div className="">
                    <input
                        className=" bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        value="Login" />
                    <p onClick={handleRestPass} className="inline-block cursor-pointer justify-center font-bold text-sm text-slate-800 hover:text-slate-700" href="#">Forgot Password?</p>
                </div>
                <div className="my-5 flex items-center justify-evenly">
                    <div className="border-b-2 w-5/12"></div>
                    <p>or</p>
                    <div className="border-b-2 w-5/12"></div>
                </div>
                <SocialLogin></SocialLogin>
                <ToastContainer />

            </form>

        </div>

    );
};

export default Login;