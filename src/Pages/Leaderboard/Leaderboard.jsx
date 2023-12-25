import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Leaderboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: gamers = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/gamers", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl text-center border w-2/12 mx-auto mb-10 py-2 my-10">
        LeaderBoard
      </h2>

      {/* table  */}
      <div className="overflow-x-auto p-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Logo</th>
              <th>Name & Username</th>
              <th>Platform</th>
              <th>email</th>
              <th>Favorite Games</th>
            </tr>
          </thead>
          <tbody>
            {gamers.map((gamer, index) => (
              <tr key={gamer._id}>
                <th>{index + 1}</th>
                <td>
                  <div className=" items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://storage.ko-fi.com/cdn/useruploads/display/056b7e14-49eb-4647-a976-6d329be1f090_skulllogo.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {gamer.name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    username: {gamer.username}
                  </span>
                </td>
                <td>{gamer.platform}</td>
                <td>{gamer.email}</td>
                <td>{gamer.favoriteGames}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
