import { getStorage, ref, uploadBytes } from "firebase/storage";
// import { storage } from "./firebaseConfig";
import app from '../shared/FirebaseConfig'
import { getFirestore } from "firebase/firestore";

// const storageRef = ref(storage, 'ninja-player/'+file?.name);
// uploadBytes(storageRef, file).then((snapshot) => {
//     console.log('Uploaded a blob or file!');
//   }).then(resp=>{
//     getDownloadURL(storageRef).then(async(url)=>{
        
//         setInputs((values)=>({...values,
//             image:url}));          
//         setSubmit(true);
//     }) 
//   }) ;**

const uploadFile = async (file) => {
    const db = getFirestore(app);
    const storage = getStorage(app);
    console.log('storage', storage);
    
  if (!file) return;

  try {
    // Create a storage reference
    // const storageRef = ref(storage, `uploads/${file.name}`);
    const storageRef = ref(storage, `ninja-player/${file.name}`);

    // Upload the file
    const snapshot = await uploadBytes(storageRef, file);

    console.log("Uploaded a blob or file!", snapshot);
    return snapshot;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export default uploadFile;