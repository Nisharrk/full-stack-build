"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("none");
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

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data);
    setData(response.data.data.username);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2 className="py-1 px-4 rounded text-xl">
        {data === "none" ? ":(" : <Link href={`/profile/${data}`}>{data}</Link>}
      </h2>
      <button
        onClick={getUserDetails}
        className="px-4 py-2 mt-2 text-sm rounded-md hover:bg-orange-500 text-white border-orange-500 border-2"
      >
        Get user details
      </button>
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
