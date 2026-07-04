import { useState } from "react";
import {
  createUserDocumentFromAuth,
  createUserAuthWithEmailAndPassword,
} from "../utils/firebase";

const intialData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function Signup() {
  //Signup Form Data
  const [formData, setFormData] = useState(intialData);
  const { displayName, email, password, confirmPassword } = formData;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not match!");
      return;
    }
    try {
      const response = await createUserAuthWithEmailAndPassword(
        email,
        password,
      );
      await createUserDocumentFromAuth(response.user, { displayName });
      setFormData(intialData);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use.");
      } else {
        console.log("Cannot create user, encouter creation error : ", error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 ml-5 w-1/2">
      <h2 className="text-xl font-semibold ">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-2/3">
        <input
          className="p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Full Name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
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
          minLength="6"
          required
        />
        <input
          className="p-2 border border-gray-300 rounded"
          type="password"
          placeholder="ConfirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          minLength="6"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
