import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    // error
    const [errorMsg, setErrorMasg] = useState('');
    const [validPass, setValidPass] = useState(true);
    const [match, setMatch] = useState(true);
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // update profile 
    const [updateProfile, updating, error] = useUpdateProfile(auth);






    //taking values using useRef
    const nameFrist = useRef('');
    const nameLast = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const conPassRef = useRef('');


    const handlePassOnBlue = () => {
        const pass = passRef.current.value;

        if (pass.length < 6) {
            setErrorMasg("Password must be atleast 6 characters.");
            setValidPass(true);
            return;
        }
        else {
            setErrorMasg(" ");
            setValidPass(false);
        }

    }
    const handleConPassOnBlue = () => {
        const pass = passRef.current.value;
        const conPass = conPassRef.current.value;
        if (pass !== conPass) {
            setErrorMasg("Password doesn't match.");
            setMatch(true);
            return;
        }
        else {
            setErrorMasg(" ");
            setMatch(false);
        }
    }



    if (createError) {
        setErrorMasg(createError.message);
    }

    if (loading) {
        return <Loading></Loading>;
    }

    const handleOnClickReg = async (event) => {
        event.preventDefault();
        const name = nameFrist.current.value + " " + nameLast.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const password = conPassRef.current.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // signOut(auth);
        navigate('/');
    }


    return (
        <div className="w-full max-w-lg mx-auto my-auto mb-10">
            <p className="text-green-600  font-bold text-5xl my-10">Registration Here</p>
            <form onSubmit={handleOnClickReg} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input ref={nameFrist} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white invalid:border-pink-500 invalid:text-pink-600" id="grid-first-name" type="text" placeholder="Frist name" required />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input ref={nameLast} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 invalid:border-pink-500 invalid:text-pink-600" id="grid-last-name" type="text" placeholder="Last name" required />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline invalid:border-pink-500 invalid:text-pink-600" id="email" type="email" placeholder="email" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input

                        ref={passRef}
                        onChange={handlePassOnBlue}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"
                        placeholder="password"
                        required />

                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Confirm Password
                    </label>
                    <input
                        disabled={validPass}
                        ref={conPassRef}
                        onChange={handleConPassOnBlue}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="Confirm Password" required />
                    <p className="text-red-500 text-xs italic">{errorMsg}</p>
                </div>
                {errorMsg}
                <div className="mb-6">
                    <p className="text-lg italic">Already Registered? <Link className="text-green-900 hover:underline font-bold" to="/login">Login here.</Link></p>
                </div>
                <div className="flex items-center justify-between">
                    <input
                        disabled={match}
                        className=" bg-green-800 hover:bg-green-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
                        type="submit"
                        value="Register"
                    />

                </div>
            </form>

        </div>

    );
};

export default Register;

