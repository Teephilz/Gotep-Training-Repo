import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import EditUser from "./pages/EditUser";
import UserDetails from "./pages/UserDetails";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";



function App() {

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;


//EXPLANATION OF USE STATE AND FUNCTIONAL COMPONENT
// const Card= ({title})=>{
//   //Let's use Reack Hook (useState)

//   const [count, setCount]= useState(0);

//     const [hasliked, setHasLiked]= useState(false);

//     //use Effect (another React hOOK)
//     useEffect(()=>{
//       console.log(`${title} has been liked: ${hasliked}`);
//     }, [hasliked, title]);


//   //  <h2>{title} <br/>{count || null }</h2>. We are saying if there is no count dont render this


//   return (
//     <div  className="card" onClick={()=>{
//       setCount((prevState)=> prevState + 1);
//     }}>
//       <h2>{title} <br/>{count || null }</h2>
//       <button onClick={()=>{setHasLiked(!hasliked)}}>{
//         hasliked? '❤️':'🤍 '}</button>
//     </div>
//   );
// }

// export default function App() {

//   return (
//     <div className='card-container'>
//       <Card title="Star Wars"/>\
//       <Card title="Avatar"/>
//        <Card title="Lion King"/>

//     </div>
//   )
// }



