import Image from "next/image";

import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { BiHash, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";



interface twitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: twitterSidebarButton[] = [
  {
    title: "Home",
    icon: <MdHomeFilled />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell/>,
  },
  {
    title: "Messages",
    icon: <BsEnvelope/>,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark/>,
  },
  {
    title: "Profile",
    icon: <BiUser/>,
  },
];

export default function Home() {
  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pt-2  ml-5">
          <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-2 text-xl  pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2" key={item.title}>
                  {" "}
                  <span>{item.icon}</span> 
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3 ">
            <button className=" bg-[rgb(29,155,240)] font-semibold text-lg p-4 rounded-full w-full ">Tweet</button>
            </div>
          </div>
        </div>

        <div className="col-span-5 border-r-[1px] h-screen overflow-scroll border-l-[1px]  border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
