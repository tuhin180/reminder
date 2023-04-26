import { AuthContext } from "@/Context/appContext";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import ReminderCard from "./ReminderCard";

const Reminder = () => {
  const { user } = useContext(AuthContext);
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`https://reminder-server.vercel.app/reminder/${user.email}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <ReminderCard key={index} item={item} refetch={refetch} />
      ))}
    </div>
  );
};

export default Reminder;
