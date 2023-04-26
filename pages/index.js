import Image from "next/image";

import CreateReminder from "@/components/CreateReminder";
import Reminder from "@/components/Reminder";
import { useContext } from "react";
import { AuthContext } from "@/Context/appContext";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function Home() {
  const { user, logout } = useContext(AuthContext);

  const hadleLogout = () => {
    logout()
      .then((result) => {
        toast.success("Logged Out succesfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="w-11/12 mx-auto mt-2">
      <div className="flex justify-between items-center px-3 h-12 shadow rounded">
        <div>
          <p className="">
            <span className="bg-blue-700 px-1 rounded-md text-white">R</span>
            eminder
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <h1>{user && user.displayName}</h1>
          {user ? (
            <>
              <button
                onClick={hadleLogout}
                className="bg-blue-700 px-3 rounded-lg text-white py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href={"/login"}
                className="bg-blue-700 px-3 rounded-lg text-white py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
      <CreateReminder />
      <Reminder />
    </div>
  );
}
