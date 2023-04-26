import { AuthContext, AuthContextProvider } from "@/Context/appContext";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext } from "react";
const queryClient = new QueryClient();
const noAuthRoutes = ["/login", "/register"];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { usesr } = useContext(AuthContext);
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {noAuthRoutes.includes(router.pathname) ? (
          <>
            <Component {...pageProps} />
          </>
        ) : (
          <>
            <ProtectedRoutes>
              <Component {...pageProps} />
            </ProtectedRoutes>
          </>
        )}
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
