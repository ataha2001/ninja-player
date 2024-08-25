'use client'
import Data from "@/shared/Data";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import app from '../../shared/FirebaseConfig'
import { doc, getFirestore, setDoc } from "firebase/firestore"; 
import { getDownloadURL, getStorage, 
  ref, uploadBytes } from "firebase/storage";

  import uploadFile from "../../utils/uploadFile";
const Form = () => {
  const [inputs, setInputs] = useState({})
  const [showToast, setShowToast] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [file, setFile] = useState();
  const {data: session} = useSession()
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  useEffect(() => {
    if(session){
    setInputs((values)=>({...values, userName:session?.user?.name}))
    setInputs((values)=>({...values, userImage:session?.user?.image}))
    setInputs((values)=>({...values, email:session?.user?.email}))
  }}, [session])

  // useEffect(() => {
  //   if(submit===true){
  //     savePost()
  //   }
  // }, [submit])
  
  const handleChange=(e)=>{
    const name = e.target.name
    const value = e.target.value
    setInputs((values)=> ({...values, [name]: value}))
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setShowToast(true);
    
    // const storageRef = ref(storage, 'ninja-player/'+file?.name);
    // console.log('we are in form submit', storageRef);
    console.log('we are in form submit', file);
    // uploadFile(file)
    if (file) {
      // await uploadFile(file);
      alert("File uploaded successfully!");
    } else {
      alert("Please select a file first!");
    }
    // uploadBytes(storageRef, file).then((snapshot) => {
    //     console.log('Uploaded a blob or file!');
    //   }).then(resp=>{
    //     getDownloadURL(storageRef).then(async(url)=>{
            
    //         setInputs((values)=>({...values,
    //             image:url}));          
    //         setSubmit(true);
    // console.log('we are in ubloadbyt');
    

    //     }) 
    //   }) ;
    await savePost()
    
  }
  const savePost=async()=>{
    console.log('we are in save post in form');
    console.log('inputs', inputs);
    
    const response = await fetch('/api/create-post', {
      // method: editedCategpry ? 'PUT' : 'POST',
      method: 'POST',
      headers: { 'Conetnt-Type': 'application/json'},
      body: JSON.stringify(inputs)
  })
    // await setDoc(doc(db, "posts", Date.now().toString()), inputs);
  }
  return (
    <div className="mt-4">
      <form 
      onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <textarea
          name="desc"
          className="w-full mb-4 
    outline-blue-400 border-[1px] 
    p-2 rounded-md"
          required
          onChange={handleChange}
          placeholder="Write Description here"
        />

        <input
          type="date"
          name="date"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Zip"
          name="zip"
          required
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <select
          name="game"
          onChange={handleChange}
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        >
          <option disabled defaultValue>
            Select Game
          </option>
          {Data.GameList.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/gif, image/jpeg, image/png"
          className="mb-5 border-[1px] w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 w-full p-1 
                    rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
