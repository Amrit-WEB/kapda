import Login from "../components/Login";
import Signup from "../components/Signup";

function Authenticate() {
  return (
    <div className="flex mt-10">
      <Login />
      <Signup />
    </div>
  );
}
export default Authenticate;
