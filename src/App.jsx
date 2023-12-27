import { useContext } from "react";
import LeftPart from "./Components/LeftPart";
import Right from "./Components/Right";
import { StateContext } from "./Context/StateContext";

const App = () => {
  const { userSchema, setUserSchema } = useContext(StateContext);
  // console.log(typeof userSchema);
  return (
    <>
      <div className="w-full border border-black flex flex-col py-2 px-6 ">
        <h1 className="uppercase text-center font-bold text-3xl m-2 ">
          ui schema
        </h1>
        <div className="flex flex-col md:flex-row gap-3">
          <LeftPart userSchema={userSchema} setUserSchema={setUserSchema} />
          <Right userSchema={userSchema} />
        </div>
      </div>
    </>
  );
};

export default App;
