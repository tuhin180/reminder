import { toast } from "react-hot-toast";

const ReminderCard = ({ item }) => {
  const { title, date } = item;
  const my_date = date.slice(0, 10);
  const my_time = date.slice(11, 16);
  const handleDelete = () => {
    fetch(`https://reminder-server.vercel.app/reminder/${item._id}`, {
      method: "DELETE",
    }).then(() => {
      toast.remove("Reminder deleted");
      window.location.reload();
    });
  };

  return (
    <div className="shadow rounded-xl">
      <div className="px-4 py-2">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold ">{title}</h1>
          <button
            onClick={handleDelete}
            className="bg-red-400 text-white px-2 rounded-md"
          >
            delete
          </button>
        </div>
        <div className="mt-2">
          <p className="bg-blue-700 w-1/2 text-white text-center rounded-md">
            Date - {my_date}
          </p>
          <h1 className="mt-2 bg-green-500 w-1/2 text-center rounded-md text-white">
            Time - {my_time}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ReminderCard;
