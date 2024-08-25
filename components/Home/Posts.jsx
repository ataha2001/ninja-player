'use client'
import React, { useState } from "react";
import PostItem from "./PostItem";
import PostModal from "./PostModal";

const Posts = ({ posts }) => {
  const [post, setPost] = useState()

  return (
    <div className="">
      <div className="">
        <PostModal post={post} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 px-10">
        {posts.map((item, index) => (
          <div
            className=""
            onClick={() => {
                document.getElementById("my_modal_1").showModal()
                setPost(item)}}
                key={index}
          >
            <PostItem post={item}  modal={true}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
