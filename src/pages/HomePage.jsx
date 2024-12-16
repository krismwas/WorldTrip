import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h2>World wise</h2>
      <NavLink to={"/app"}>Go to the app</NavLink>
    </div>
  );
}

export default HomePage;
