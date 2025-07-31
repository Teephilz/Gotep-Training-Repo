import { useContext } from "react";
import CounterContext from "../context/CounterContext";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCountByAnyValue, decreaseMyCount, increaseCountByAnyValue, increaseMyCount } from "../redux/countSlice";



const Footer = () => {
   const {count, increaseCount, decreaseCount} = useContext(CounterContext);
   const {newCount}= useSelector((state)=>state.count);

   const dispatch = useDispatch();

  return (
      <footer  className="p-4 text-center border-t mt-4 grid grid-cols-2 gap-3">
        <div>
          <p>&copy; {new Date().getFullYear()} PostApp. All rights reserved.</p>

          <p className="text-blue-500">Count from useContext</p>
          <p className="text-black  dark:text-white font-bold m-2 text-[50px]">{count}</p>
   
         <button className="px-4 bg-blue-500 rounded-[20px] mr-4 text-[15px] transition-color duration-75 hover:bg-blue-400
         " onClick={()=>increaseCount()}>Increase</button>

          <button className="px-4 bg-blue-500 rounded-[20px] mr-4 text-[15px] transition-color duration-75 hover:bg-blue-400" onClick={()=>decreaseCount()}>Decrease</button>
        </div>


   
         <div>
          <p>&copy; {new Date().getFullYear()} PostApp. All rights reserved.</p>
                    <p className="text-blue-500">Count from Slice</p>
          <p className="text-black dark:text-white font-bold m-2 text-[50px]">{newCount}</p>
   
         <button className="px-4 bg-blue-500 rounded-[20px] mr-4 text-[15px] transition-color duration-75 hover:bg-blue-400
         " onClick={()=> dispatch(increaseMyCount())}>Increase</button>

          <button className="px-4 bg-blue-500 rounded-[20px] mr-4 text-[15px] transition-color duration-75 hover:bg-blue-400"
           onClick={()=>dispatch(decreaseMyCount())}>Decrease</button>

           <div className="mt-2">
          <button className="px-4 bg-blue-500 rounded-[20px] mr-4 text-[15px] transition-color duration-75 hover:bg-blue-400
            " onClick={()=> dispatch(increaseCountByAnyValue(5))}>Increase By 5</button>

              <button className="px-4 bg-blue-500 rounded-[20px] mr-4 text-[15px] transition-color duration-75 hover:bg-blue-400"
              onClick={()=>dispatch(decreaseCountByAnyValue(5))}>Decrease By 5</button>
           </div>

           
        </div>
   
  </footer>
  );
}

export default Footer;
