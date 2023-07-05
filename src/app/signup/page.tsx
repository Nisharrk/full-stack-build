"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignUp() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignUp = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-4">SignUp</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        className="px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none"
        onClick={onSignUp}
      >
        Signup
      </button>
      <Link href="/login">Visit login page</Link>
    </div>
  );
}
