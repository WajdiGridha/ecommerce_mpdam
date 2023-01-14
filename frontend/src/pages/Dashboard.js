import React from "react";

const Dashboard = () => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    window.location.href = "/register";
  };

  return (
    <div className="bg-sky-800 w-full h-screen flex flex-col items-center justify-center uppercase text-white">
      <h1 className="py-4 text-2xl font-extrabold">Welcome To Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
