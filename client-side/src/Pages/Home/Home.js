import React from 'react';
import { Box, Spacer } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full h-720 flex flex-col bg-blue">
          <div className='ml-16 h-full bg-blue flex flex-col justify-center items-start tracking-wide font-extrabold '>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl pb-2 tracking-widest">Revolutionize your </h1>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl pb-2 tracking-widest font-extrabold">learning with the best </h1>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl tracking-widest font-bold">resources!</h1>
          </div>
        </div>

        {/* //!============================== */}
        <div className="h-387 bg-white  text-black flex flex-col justify-center items-start tracking-wide  ">
          <div className="h-1/2 w-3/5  ml-20 text-black flex flex-col justify-center items-start tracking-wide ">
            <h1 className='text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-extrabold'>Dive into our Dive into our book collection or explore curated YouTube courses, what are you waiting for?</h1>
            <div className='flex flex-row mt-6 font-semibold text-sm  '><a className='bg-yellow text-black px-4 py-3  rounded-lg ' href="">Browse Books</a>
            <a className='bg-blue ml-8 text-white px-4 py-3  rounded-lg ' href="">Watch Courses</a>
            </div>
          </div>
        </div>

       {/*  //!=============================== */}
        <div className="h-616 w-full bg-blue text-black flex items-center">
          <div className='flex flex-row align-middle justify-center'>
            <div className='flex flex-col w-3/4'>
              <img src="/Assets/Home/Book.jpg" alt="" />

            </div>
          </div>
        </div>


        {/* //!=================================== */}
        <div className="h-387 bg-white text-black flex flex-col justify-center ">
          <div className="h-1/2 w-3/5  ml-20 text-black flex flex-col justify-center items-start tracking-wide ">
            <h1 className=' font-extrabold text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl'>Having Doubts? Ask our experts!</h1>
            <p className='mt-4 font-semibold'>
              Introducing our Expert Q&A section featuring ChatGPT, Bard chat based AI tools from Google, and our experienced Tutor. Ask questions in text, or simply upload photos/videos to Tutors for detailed queries. Get precise, professional answers from our experts.
            </p>
            <div className='flex flex-row mt-6 font-semibold text-sm  '><a className='bg-yellow text-black px-4 py-3  rounded-lg ' href="https://read-online-books.com/book/read-online-sex-story-an-erotica-short-free">Doubt Solve</a>
            </div>
          </div>
        </div>

        {/* //!================================= */}
        <div className="h-616 bg-blue text-black flex justify-center items-center">
          {/* Content for the fifth section */}
        </div>
        <div className="h-221 bg-black text-black flex justify-center items-center">
          {/* Content for the sixth section */}
        </div>
      </div>
    </>
  );
}



export default Home;
