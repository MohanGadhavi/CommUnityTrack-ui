import React from "react";

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="Karyakata with Yuva Seva"
          subtitle="Karyakata and Yuva"
          href="#"
        />
        <Card title="Seva" subtitle="Total Hour Of Seva" href="#" />
        <Card
          title="Unique Yuvako "
          subtitle="Unique Yuvako Touched"
          href="#"
        />
        <Card title="Yuvako Touched" subtitle="Total Yuvako Touched" href="#" />
      </div>
    </div>
  );
};

// from-violet-600
const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-s-blue-gray-50 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brown-800 to-blue-gray-100 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <h3 className="font-medium text-lg text-gray-900 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-gray-900    group-hover:text-blue-gray-50 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
