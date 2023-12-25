import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ToDo = () => {

    const axiosSecure = useAxiosSecure();
  
  const { data: tasks = [] } = useQuery({
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


    return (
        <div>
            this is todo {tasks.length}
        </div>
    );
};

export default ToDo;