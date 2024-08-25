import React from "react";
import { HiOutlineMapPin, HiOutlineCalendar } from "react-icons/hi2";
import UserInfo from "./UserInfo";

const PostItem = ({ post, modal=false }) => {
  return (
    <>
    {post ? 
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full h-[180px]" src={post?.image} alt="" />

      <div className="p-5">
        <h5 className="truncate  mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post?.title}
        </h5>
        <div className="flex items-center text-orange-500 gap-2 mb-2">
          <HiOutlineCalendar className="text-[20px]" />
          {post?.date}
        </div>
        <div className="flex items-center text-blue-500 gap-2 mb-2">
          <HiOutlineMapPin className="text-[20px]" />
          {post?.location}
        </div>
    <div className="">
    {}
    </div>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 truncate">
          {post?.desc}
        </p>
        {!modal? <UserInfo user={post} />:null}
        {modal ? 
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        : null}
      </div>
    </div>
    : null}
    </>
  );
};

export default PostItem;
