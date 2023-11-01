import './style.css';
import React, { useEffect, useState, useRef } from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import { Bookmark, LocalLibrary, Psychology, VideoLibrary } from '@mui/icons-material';
import Profile from './Profile';
import MenuIcon from '@mui/icons-material/Menu';

import CloseIcon from '@mui/icons-material/Close';

const StudentDashboard = () => {
    
    const [val, setval] = useState();
    const buttonRef = useRef(null);
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li button');
        allSideMenu.forEach(item => {
            const li = item.parentElement;
            item.addEventListener('click', function () {
                allSideMenu.forEach(i => {
                    i.parentElement.classList.remove('active');
                });
                li.classList.add('active');
            });
        });
    }, []);

    // const toggleSidebar = () => {
    //     setSidebarOpen(!sidebarOpen);
    // };
    const handle = (e) => {

    
        setval(buttonRef.current.id)

        console.log(buttonRef.current.id)

    }


    return (
        <div className="student overflow-hidden">
    
          
    <section id="sidebar">
    <div className='text-red-500 text-xl' onClick={() => setToggle(!toggle)}>
      {toggle ? <CloseIcon /> :   <MenuIcon className='' />}
    </div>  
            <div  className={`${
            !toggle ? "hidden" : "flex flex-col"
          }`}>
                <a href="stDashbord" className="brand flex items-center text-blue-500 flex flex-col mt-7">
                    <i className="bx bxs-smile text-blue-500"></i>

                    <div className="icon-container relative ">
                        <div className="shadow-circle h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center">
                            <PersonIcon className="text-blue-500 text-4xl" /> {/* Center the icon using flex */}
                        </div>
                    </div>

                    <span className="text mt-4 font-semibold">Abhishek Chaurasia</span>
                    <span className="text-gray-600 mt-2 text-sm ">@AbhishekChaurasia</span>


                </a>
                <div className='border-b-2 mt-16 border-grey-600 w-3/4 ml-7'></div>
                <div className="brand-line absolute top-0 left-0 h-full bg-blue-500 w-1"></div>
                {/* sidebaritem */}
                <div className=''>
                    <ul className="flex flex-col side-menu top ">
                        <li className="active flex pl-8 ">
                            <button id="1" onClick={(e) => handle(e)} ref={buttonRef}>
                                <DashboardIcon className="text-blue-500 mr-2" />
                                <span className="text font-semibold">Dashboard</span>
                            </button>
                        </li>
                        <li className='pl-8'>
                            <button id="1" onClick={(e) => handle(e)} ref={buttonRef}>
                                <PersonIcon className="text-blue-500 mr-2" />
                                <span className="text font-semibold">My Profile</span>
                            </button>
                        </li>
                        <li className='pl-8'>
                            <button id="1" onClick={(e) => handle(e)} ref={buttonRef}>
                                <VideoLibrary className="text-blue-500 mr-2" />
                                <span className="text font-semibold">Video Courses</span>
                            </button>
                        </li>
                        <li className='pl-8'>
                            <button id="1" onClick={(e) => handle(e)} ref={buttonRef}>
                                <LocalLibrary className="text-blue-500 mr-2" />
                                <span className="text font-semibold">Books</span>
                            </button>
                        </li>
                        <li className='pl-8'>
                            <button id="1" onClick={(e) => handle(e)} ref={buttonRef}>
                                <Psychology className="text-blue-500 mr-2" />
                                <span className="text font-semibold">Expert</span>
                            </button>
                        </li>
                        <li className='pl-8'>

                            <button id="1" onClick={(e) => handle(e)} ref={buttonRef}>
                                <Bookmark className="text-blue-500 mr-2" />
                                <span className="text font-semibold">Wishlist</span>
                            </button>

                        </li>
                    </ul>
                </div>
                </div>
            </section>
            <section id="content">

                <section className=''>
                    {(() => {
                        switch (val) {
                            case "1":
                                return <Profile />;

                        }
                    })()}
                </section>


            </section>
        </div>
    );
}

export default StudentDashboard;
