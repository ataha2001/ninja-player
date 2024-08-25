"use client";
import GameList from "@/components/Home/GameList";
import Hero from "@/components/Home/Hero";
import Posts from "@/components/Home/Posts";
import Search from "@/components/Home/Search";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../shared/FirebaseConfig";
import { useEffect, useState } from "react";

export default function Home() {
  const db = getFirestore(app);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getPost();
    setLoading(false)
  }, []);

  const getPost = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setPosts(posts=> [...posts, doc.data()]);
    });
  };
  if(loading){
    return (
      <div className="text-center mt-20">
        <span className="loading loading-spinner loading-lg text-blue-500 "></span>
      </div>
    )
  }
  return (
    <div className="px-5 sm:px-7 md:px-10 mt-9">
      <Hero />
      <Search />
      <GameList />
      {posts ? <Posts posts={posts} /> : null}
    </div>
  );
}
