import { AuthContext } from "@/Context/appContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);
  return <>{user && children}</>;
};

export default ProtectedRoutes;
