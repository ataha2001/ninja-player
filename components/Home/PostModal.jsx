import React from "react";
import PostItem from "./PostItem";
import { HiOutlineXCircle } from "react-icons/hi2";

const PostModal = ({post}) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      
      <dialog id="my_modal_1" className="modal p-0 ">
        <div className="">
        
          <div className="modal-action ">
            <form method="dialog modal-box" className="relative" >
                <button className="absolute right-2 top-2 cursor-pointer border-0" >
                    <HiOutlineXCircle className="text-[22px] text-white"/>
                </button>
            <PostItem post={post} />
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PostModal;
