import { getStorage } from "firebase/storage";
// import app from '../../shared/FirebaseConfig'
import app from "../../../shared/FirebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export async function POST(req,res) {
  // mongoose.connect(process.env.MONGO_URL)
  // const {name} = await req.json()
  // if(await isAdmin()){
  //     const categoryDoc = await Category.create({name})
  //     return Response.json(categoryDoc)
  // }else  {
  //     return Response.json({})

  // }
  console.log("we are in post function route");

  const db = getFirestore(app);
  const storage = getStorage(app);
  const  {data}  = await req.json();
//   const { date, desc,game, image,location,title,zip,useName,userImage } = data.inputs;
  console.log("req", data);
  if (data) {
    const resData = await setDoc(doc(db, "posts", Date.now().toString()), data.inputs);
    console.log("done");

    return Response.json(resData);
  } else {
    console.log("not ok ");
    return Response.json({});
  }

}

