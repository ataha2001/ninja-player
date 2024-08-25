"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlinePencilSquare, HiArrowLeftOnRectangle } from "react-icons/hi2";

const USER_IMAGE = '/Images/user.png'
// const USER_IMAGE =
//   "https://res.cloudinary.com/atahaegy2001/image/upload/v1723044156/lkybqsdiils0vnor3lvl.jpg";
const Header = () => {
  const {data: session} = useSession();
  const route = useRouter()

  // console.log("session", session);

  return (
    <header className="bg-white">
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8 
    flex justify-between items-center p-3  border-b-[2px] shadow-md border-[#FF3366]
    "
      >
        <div className="">
          <Image src={"/Images/logo.png"} width={120} height={80} alt="logo" />
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-black p-2 px-3 text-white rounded-full "
            onClick={()=> route.push('/create-post')}
          >
            <span className="hidden sm:block">Create Post</span>
            <HiOutlinePencilSquare className="sm:hidden text-[20px]" />
          </button>
          {!session ? (
            <button
              className="bg-white p-2 px-3 text-gray-500 rounded-full border-[1px] b"
              onClick={() => signIn()}
            >
              <span className="hidden sm:block">Sign In</span>
              <HiArrowLeftOnRectangle className="sm:hidden text-[20px]" />
            </button>
          ) : (
            <button
              className="bg-white p-2 px-3 text-gray-500 rounded-full border-[1px] b"
              onClick={() => signOut()}
            >
              <span className="hidden sm:block">Sign Out</span>
              <HiArrowLeftOnRectangle className="sm:hidden text-[20px]" />
            </button>
          )}
          <div className="avatar">
            <div className="w-10 rounded-full">
              <Image
                src={session ? session?.user.image : USER_IMAGE}
                width={40}
                height={40}
                alt="user"
                title='show profile details'
                className="cursor-pointer"
                onClick={()=> route.push('/profile')}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
