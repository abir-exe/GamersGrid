import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ToDo = () => {
  const axiosSecure = useAxiosSecure();

  const { data: tasks = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });

  const todo = tasks.filter((task) => task.state === "todo");
  const ongoing = tasks.filter((task) => task.state === "ongoing");
  const completed = tasks.filter((task) => task.state === "completed");
  console.log(ongoing);

  return (
    <div className="flex justify-between text-justify">
      <div className="w-1/4">
        <h2 className="text-2xl text-center border  mx-auto mb-10 py-2">
          To-Do
        </h2>
        <div>
          {todo.map((singleToDo) => (
            <div
              key={singleToDo._id}
              className="card my-5 mx-2 p-2  bg-primary text-primary-content"
            >
             <div className="card-body">
                <h2 className="card-title">Title: {singleToDo.title}</h2>
                <p>Description: {singleToDo.description}</p>
                <div className="card-actions justify-end">
                  <p className="font-bold">Priority: {singleToDo.priority}</p>
                </div>
              </div>
              </div>
            
          ))}
        </div>
      </div>
      <div className="divider lg:divider-horizontal">-</div> 
      <div className="w-1/4">
        <h2 className="text-2xl text-center border  mx-auto mb-10 py-2">
          Ongoing
        </h2>
        <div>
          {ongoing.map((singleOngoing) => (
            <div
              key={singleOngoing._id}
              className="card my-5 mx-2 p-2  bg-primary text-primary-content"
            >
              <div className="card-body">
                <h2 className="card-title">Title: {singleOngoing.title}</h2>
                <p>Description: {singleOngoing.description}</p>
                <div className="card-actions justify-end">
                  <p className="font-bold">Priority: {singleOngoing.priority}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="divider lg:divider-horizontal">-</div> 
      <div className="w-1/4">
        <h2 className="text-2xl text-center border  mx-auto mb-10 py-2">
          Completed
        </h2>
        <div>
          {completed.map((singleCompleted) => (
            <div
              key={singleCompleted._id}
              className="card my-5 mx-2 p-2  bg-primary text-primary-content"
            >
              <div className="card-body">
                <h2 className="card-title">Title: {singleCompleted.title}</h2>
                <p>Description: {singleCompleted.description}</p>
                <div className="card-actions justify-end">
                  <p className="font-bold">Priority: {singleCompleted.priority}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
