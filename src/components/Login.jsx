import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import {
  // auth,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  loginhWithEmailAndPassword,
} from "../utils/firebase";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

const intialData = {
  email: "",
  password: "",
};

function Login() {
  // useEffect(() => {
  //   const checkRedirectResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   checkRedirectResult();
  // }, []);

  //Login Form Data
  const [formData, setFormData] = useState(intialData);
  const { email, password } = formData;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginhWithEmailAndPassword(email, password);
      console.log(response);
      setFormData(intialData);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("no user associated with this email.");
          break;
        case "auth/invalid-credential":
          alert("Wrong password !");
          break;
        default:
          console.log("encounter error while login : ", error);
      }
    }
  };

  //Google Authentication Signup and Login
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div className="flex flex-col items-center w-1/2">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-2/3">
        <input
          className="p-2 border border-gray-300 rounded"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border border-gray-300 rounded"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          minLength="6"
        />
        <button
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </form>
      <p className="my-4">---- OR ----</p>
      <button
        className="p-2 bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded flex items-center justify-center w-2/3"
        onClick={logGoogleUser}
      >
        <FaGoogle />
        oogle Login via Popup
      </button>
      {/* <button
          className="mt-2 p-2 bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded flex items-center justify-center w-2/3"
          onClick={signInWithGoogleRedirect}
        >
          <FaGoogle />
          oogle Login Via Redirect
        </button> */}
    </div>
  );
}
export default Login;
