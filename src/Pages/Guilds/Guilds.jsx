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
          guilds.map(guild => <div key={guild._id} className="card rounded-none image-full">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>)
        }
        
      </div>
    </div>
  );
};

export default Guilds;
