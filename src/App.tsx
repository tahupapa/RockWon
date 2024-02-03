import { Outlet } from "react-router-dom";
import Navigation from "./router/Navigation";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default App;
