import React from "react";
import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <footer className=" bg-[#1C1F21] text-[#f6f7eb] p-5 px-10 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
      <Typography className="font-normal">
        &copy; 2024 CommUnity Track
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-[#ED6D5A] focus:text-[#ED6D5A]"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-[#ED6D5A] focus:text-[#ED6D5A]"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-[#ED6D5A] focus:text-[#ED6D5A]"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            className="font-normal transition-colors hover:text-[#ED6D5A] focus:text-[#ED6D5A]"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
