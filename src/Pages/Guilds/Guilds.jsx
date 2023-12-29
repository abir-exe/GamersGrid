import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Guilds = () => {

  const axiosSecure = useAxiosSecure();


  const { data: guilds = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/guilds", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });
  console.log(guilds)

  return (
    <div>
        <h2 className="text-2xl text-center border w-4/12 mx-auto py-2 my-20">
        Top Guilds
      </h2>
      {/* cards */}
      <div className="w-11/12 mx-auto grid grid-cols-4 gap-3">
        {
          guilds.map(guild => <div key={guild._id} className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*mcA5uKP0nY1tvP20egoP5A.png"
              alt="guilds"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{guild.guild_name}</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary btn-outline">Join</button>
            </div>
          </div>
        </div>)
        }
        
      </div>
    </div>
  );
};

export default Guilds;
