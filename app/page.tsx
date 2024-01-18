import { Navbar } from '@nextui-org/react';
import React from 'react';
import Header from '../components/Header';
import topbg from "../assets/top-bg.png";
import Banner from '@/components/Banner';

const page = () => {
  return (
    <div className='container mx-auto'>
      {/* <div className="bg-[url('../assets/top-bg.png')] h-[400px] relative top-0 opacity-10 left-0 "><div className='py-2 items-center'><Header/></div></div> */}
        <div className='py-2 items-center'><Header/></div>
        <div><Banner/></div>
      
    </div>
  );
};

export default page;