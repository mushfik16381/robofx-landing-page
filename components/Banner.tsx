import React from 'react';
import Image from "next/image";
import banner from "../assets/banner.png";
import { Button, Link } from '@nextui-org/react';

const Banner = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <h2 className='pt-[68px] pb-[24px] text-[68px] font-bold text-primary leading-[76px]'>Your Crypto <br/> Mining <br/> Starts Here</h2>
                <h3 className='text-[20px] font-medium text-darkText pb-[24px]'>It’s super simple - Your mining rigs are already set up and running.</h3>
                <Button as={Link} className="text-white bg-primary rounded-full text-[16px] font-semibold py-[14px] px-[22px]" href="#" variant="flat">
                Start Mining
                </Button>
                <Link className="text-lightText bg-none text-[16px] font-semibold py-[12px] px-[24px]" href="#">
                Contact Us
                </Link>
                <ul className='flex justify-between'>
                    <li><p>Global Mining Leader</p></li>
                    <li><p>Turnkey Solutions</p></li>
                    <li><p>Global Mining Leader</p></li>
                </ul>
            </div>
            <div>
                <Image className='pt-[16px]' src={banner} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;