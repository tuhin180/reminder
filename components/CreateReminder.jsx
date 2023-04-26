import { AuthContext } from "@/Context/appContext";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const CreateReminder = () => {
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16));

  function handleDateChange(event) {
    setDate(event.target.value);
  }
  const handleform = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const reminderData = {
      title,
      date,
      email: user.email,
    };

    fetch(
      "http://localhost:5000/reminder",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reminderData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Reminder create succesfully");
          form.reset("");
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-blue-600 font-semibold text-xl mt-2">
        Create your Reminder
      </h1>

      <div className="my-4 flex justify-center items-center">
        <div className="w-full  md:w-1/2 mx-auto shadow rounded-md ">
          <div className=" container p-2 border rounded-sm">
            <form onSubmit={handleform}>
              <div>
                <input
                  name="title"
                  type="text"
                  placeholder="Enter rmeinder title"
                  className="w-full border p-2 focus:outline-none"
                />
              </div>

              <div className="container mx-auto mt-8">
                <label className="block font-bold mb-2" htmlFor="datetime">
                  Select date and time:
                </label>
                <input
                  type="datetime-local"
                  id="datetime"
                  name="datetime"
                  value={date}
                  onChange={handleDateChange}
                  className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-center items-center my-2 ">
                <input
                  className="bg-blue-700 px-7 py-2 rounded text-white"
                  type="submit"
                  value="Create"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateReminder;
