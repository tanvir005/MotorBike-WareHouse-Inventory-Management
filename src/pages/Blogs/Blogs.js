import React from 'react';

const Blogs = () => {
    return (
        <div className="md:m-40 m-10">
            <div className="md:p-10 p-5">
                <h1 className="md:text-3xl text-slate-700 font-bold text-left">Difference between javascript and nodejs.</h1>
                <p className="md:ml-5 md:text-2xl text-slate-500 text-left"> JavaScript is a simple programming language that runs in any browser JavaScript Engine.
                    Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses,
                    it requires libraries that can easily be accessed from JavaScript programming for better use. Javascript used for any client
                    side activity for a web application . On the otherhand nodejs used for accessing or performing any non-blocking operation of
                    any operating system. Javascript running engines are : Firebox , javascript core(safari),google chrome etc. Node js running
                    engine only v8 google chrome.
                </p>
            </div>
            <div className="md:p-10 p-5">
                <h1 className="md:text-3xl text-slate-700 font-bold text-left">Differences between sql and nosql databases.</h1>
                <p className="md:ml-5 md:text-2xl text-slate-500 text-left">
                    SQL is a relational database managemnet system. On the otherhand nosql
                    is a distributed databse managemnet system. SQL is vertically scalable and
                    nosql is horiozantly scalable. SQL work with fixed or predefined scheema and
                    nosql work with dynamic scheema. SQL can be used for complex queries .
                    Nosql is not good for complex queries.

                </p>
            </div>

            <div className="md:p-10 p-5">
                <h1 className="md:text-3xl text-slate-700 font-bold text-left">When should you use nodejs and when should you use mongodb?</h1>
                <p className="md:ml-5 md:text-2xl text-slate-500 text-left">

                    If we are building a website and we need a database to store the data or information
                    then we can use MongoDB but to be connected with MongoDB we need a connector,
                    so here we can use NodeJS which will help our website to run outside of server.
                    So we can say that we use mongodb for store data. NodeJS is a JavaScript runtime environment.
                    It's actually helps JavaScript to run outside of server. It's used in server side development.
                </p>
            </div>


        </div>
    );
};

export default Blogs;