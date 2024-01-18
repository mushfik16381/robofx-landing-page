import React from "react";
import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import roboxfxicon from "../public/logo.png";

export default function App() {
  return (
    <Navbar >
      <NavbarBrand>
        <div>
        <Image src={roboxfxicon} alt="Robofx"  />
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link className="text-darkText text-base font-bold px-2" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
        <Link className="text-lightText text-base font-medium px-2" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-lightText text-base font-medium px-2" href="#">
            Support
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-lightText text-base font-medium px-2" href="#">
            FAQ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-lightText text-base font-medium px-2" href="#">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="text-white bg-primary rounded-full text-base font-medium" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="text-red" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
