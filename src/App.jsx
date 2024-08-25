import { Button } from "@material-tailwind/react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <div className="w-full py-8 px-5 bg-black text-white h-14 grid content-center ">
        <h1 className="text-4xl font-bold">
          Comm<span className="text-blue-600">Unity</span>Task
        </h1>
      </div>
      <Login />
      <Registration />
    </>
  );
}

export default App;
