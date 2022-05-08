import React from 'react';
import bannerPic from '../../../images/banner-pic.png';

const Home = () => {

    return (
        <div>
            <div className="md:flex bg-black items-center justify-evenly pb-5 md:pb-0">
                <div className="w-10/12 mx-auto justify-items-end md:order-2"><img className="w-9/12" src={bannerPic} alt="" /></div>
                <div className="mx-auto w-4/12 md:ml-32 text-left">

                    <h1 className="md:text-2xl font-serif text-white text-lg font-semibold mb-5">SOME NEW 2023 VEHICLES
                        HAVE LAUNCHED</h1>
                    <h1 className="md:text-sm font-semibold text-white font-serif">STAY TUNED FOR THE NEXT LAUNCH JUNE 7TH AT 6 AM</h1>
                    <button className="border-2 border-indigo-600 px-6 py-2 rounded text-white md:text-xs my-5">EXPLORE NEW VEHICLES</button>

                </div>


            </div>
            <div>
                <h1 className="text-3xl font-bold text-blue-900 mt-20 text-center">Services</h1>
                <div className="grid md:grid-cols-3">

                    {/* {
                        service.slice(0, 3).map(review => <DisplayService
                            key={review.id}
                            review={review}
                        ></DisplayService>)

                    } */}

                </div>
            </div>
            <div className="md:flex items-center gap-10 m-10 p-10">
                <img className="border-2 shadow-md mb-5" src="{}" alt="" />
                <div>
                    <p className="md:text-lg text-sm text-green-800">Experience</p>
                    <h1 className="md:text-6xl text-xl font-extrabold font-serif">Life Training in Numbers</h1>
                    <p className="md:text-xl md:w-2/4 text-green-900 text-justify">Some people genuinely want to learn.
                        I'm the beat place for learnI will help you to get entry in top companies,
                        and I willingly chose to teach the newer generations.
                        So it's your turn.</p>

                    <div className="md:flex  gap-10 mx-auto mt-10 ">
                        <p className=" mt-10 hover:bg-blue-100 px-6 py-3 rounded font-bold text-teal-900 text-center">
                            289 <br />
                            Persons Mentored</p>
                        <p className="mt-10 hover:bg-slate-100 px-6 py-3 rounded font-bold text-teal-900 text-center">
                            64 <br />
                            Workshops Attended</p>
                        <p className=" mt-10 hover:bg-blue-100 px-6 py-3 rounded font-bold text-teal-900 text-center">

                            135 <br />
                            Online Courses</p>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;

