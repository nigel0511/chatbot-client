import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing Up", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Signed Up Successfully", { id: "signup" });
    } catch (error) {
      console.log(error);
      toast.error("Signing Up Failed", { id: "signup" });
    }
  };
  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth]);
  return (
    <div className="h-full w-full flex flex-1 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-[150px] w-[30%]"
      >
        <div className="flex flex-col gap-8 w-full">
          <p className="text-center text-2xl font-bold">Sign Up </p>
          <TextField type="text" name="name" label="Name" />

          <TextField fullWidth type="email" name="email" label="Email" />
          <TextField
            fullWidth
            type="password"
            name="password"
            label="Password"
          />
          <button
            type="submit"
            className="bg-white border-gray-200 border-2 rounded-lg p-2"
          >
            sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
