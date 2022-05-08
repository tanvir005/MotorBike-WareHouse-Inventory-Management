import React from 'react';

const Blogs = () => {
    return (
        <div className="md:m-40 m-10">
            <div className="md:p-10 p-5">
                <h1 className="md:text-3xl text-slate-700 font-bold text-left">Difference between authorization and authentication.</h1>
                <p className="md:ml-5 md:text-2xl text-slate-500 text-left"> Authentication is a procedure,
                    in which the identification of users is checked for giving the access to the system.
                    Whereas authorization is the procedure of verifying what particular applications,
                    files, and data a user has to access. Authentication is executed earlier than the
                    authorization procedure,
                    while the authorization procedure is executed after the authentication procedure.
                </p>
            </div>
            <div className="md:p-10 p-5">
                <h1 className="md:text-3xl text-slate-700 font-bold text-left">Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className="md:ml-5 md:text-2xl text-slate-500 text-left">
                    We use FIrebase to make our authentication easy.
                    Because Firebase Authentication provides ready-made UI libraries, easy-to-use SDKs,
                    and backend services to authenticate users to our Web app. We can authenticate using
                    Email-passwords email link kicking and popular social sites like Google, Github,
                    Facebook and Twitter, and more.

                </p>
                <h1 className="md:text-2xl text-slate-700 font-bold text-left">Best Open Source Firebase Alternatives:</h1>
                <ul className="md:pl-5 md:ml-5 md:text-2xl text-slate-500 text-left">
                    <li >AWS Amplify</li>
                    <li > Flutter</li>
                    <li >LoopBack</li>
                    <li > SashiDo</li>
                    <li >Parse</li>
                    <li >Back4App</li>
                </ul>
            </div>

        </div>
    );
};

export default Blogs;