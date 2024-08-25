import { Button } from "@material-tailwind/react";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen">
      <Header isLogin />
      <Login />
      <Registration />
    </div>
  );
}

export default App;
