import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
const Navbar = () => {
  return (
    <>
    <flex>
    <Box display='flex'>
    <Box bg='#FFFFFF' w='1920 px' height='180 px' p={4} color='Black' className='flex justify-between items-center'>
    <h1 className="text-2xl font-semibold text-black ml-2 font-rockwell"> <a href="">EduVerse </a></h1>
    </Box>
    <Spacer />
    <div className='p-4 flex justify-between items-center' >
        <a className="hover:underline mr-4 " href="">About</a>
        <a className="hover:underline mr-4"  href="">Blog</a>
        <a className="hover:underline mr-4"  href="">Career</a>
        <a className="hover:underline mr-4 "  href="">Contact Us</a>
        <a className="mr-4 ml-5 pl-3 pr-3 pt-1 pb-1 border border-transparent hover:border-blue-500" href="">Login</a>
        <a className="ml-1 pl-3 pr-3 pt-1 pb-1 mr-4 border bg-yellow-500 text-black hover:bg-yellow-600 hover:text-white rounded font-semibold transition duration-300 ease-in-out" href="">
  Sign Up
</a>
    </div>
    </Box>
    </flex>

    </>
  )
}

export default Navbar