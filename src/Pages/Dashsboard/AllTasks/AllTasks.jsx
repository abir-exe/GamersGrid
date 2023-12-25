import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AllTasks = () => {

    const axiosSecure = useAxiosSecure();
  
  const { refetch, data: tasks = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tasks", {
        headers: {
          authorization: `Bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/tasks/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl text-center border w-2/12 mx-auto mb-10 py-2">
        All Tasks
      </h2>
      {/* table  */}
      <div className="p-5 text-justify text-center">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>State</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              tasks.map((task, index) => <tr key={task._id}>
                <th>{index + 1}</th>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.deadline}</td>
                <td>{task.state}</td>
                <td>{task.priority}</td>
                <td><button onClick={() => handleDelete(task._id)} className="btn btn-outline btn-secondary btn-sm">Delete</button></td>
              </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
