import { FaGoogle } from "react-icons/fa";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../utils/firebase";

function Signup() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="flex mt-10">
      <div className="flex flex-col items-center w-1/2">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <div className="flex flex-col gap-2 w-2/3">
          <input
            className="p-2 border border-gray-300 rounded"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-2 border border-gray-300 rounded"
            type="password"
            placeholder="Password"
          />
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
            Login
          </button>
        </div>
        <p className="my-4">---- OR ----</p>
        <button
          className="p-2 bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded flex items-center justify-center w-2/3"
          onClick={logGoogleUser}
        >
          <FaGoogle />
          oogle Login
        </button>
      </div>
      <div className="flex flex-col gap-3 ml-5 w-1/2">
        <h2 className="text-xl font-semibold ">Sign Up</h2>
        <div className="flex flex-col gap-2 w-2/3">
          <input
            className="p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="p-2 border border-gray-300 rounded"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-2 border border-gray-300 rounded"
            type="password"
            placeholder="Password"
          />
          <input
            className="p-2 border border-gray-300 rounded"
            type="password"
            placeholder="ConfirmPassword"
          />
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
export default Signup;
