"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <hr />
      <button
        onClick={logout}
        className="px-4 py-2 mt-2 text-sm rounded-md hover:bg-orange-700 text-white bg-orange-500"
      >
        Logout
      </button>
      <Toaster />
    </div>
  );
}
