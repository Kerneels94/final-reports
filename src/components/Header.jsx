import { Link } from "react-router-dom";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { Profile } from "./Profile";

export const Header = () => {
  return (
    <>
      <header className="mx-auto p-5 flex items-center justify-around  shadow-md shadow-lime-200 relative">
        <div className="text-xl">
          <h1>Reports</h1>
        </div>
        {/* Lnks */}
        <ul className="flex gap-2">
          <li className="hover:text-lime-400 transition-colors ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-lime-400 transition-colors ">
            <Link to="/incidents">Incidents</Link>
          </li>
          <li className="hover:text-lime-400 transition-colors ">
            <Link to="/ob">Ob</Link>
          </li>
        </ul>
        <div className="buttons flex items-center gap-2">
          <Profile />
          <LoginButton />
          <LogoutButton />
        </div>
      </header>
    </>
  );
};
