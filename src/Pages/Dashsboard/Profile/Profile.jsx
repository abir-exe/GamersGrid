import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
  const { user, loading, updateUserProfile } = useAuth();
  console.log(user);

  if(loading){
    <p>.....................</p>
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.displayName.value;
    const photoURL = form.photoURL.value;
    console.log(name, photoURL);
    updateUserProfile(name, photoURL).then((result) => {
    //   const user = result.user;
      console.log(result.user);
      toast.success("Successfully Updated");
    });
  };

  return (
    <div>
      <div className="hero min-h-full bg-base-200 p-5">
        <div className="hero-content flex-col lg:flex-row items-center justify-between">
          <div className="avatar">
            <div className="w-24 rounded-full shadow-2xl">
            <img src={user.photoURL} className="" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold italic">
              Name:
              <span className="italic text-3xl "> {user.displayName}</span>
            </h1>
            <p className="py-6 italic">
              Email:{" "}
              <span className="italic border-b-2 border-black">
                {user.email}
              </span> 
            </p>
            
            
            
          </div>
          <div className="divider divider-horizontal"></div>
          
          <form onSubmit={handleUpdate} className="p-3 border-primary">
          <h2 className="text-2xl text-center border mx-auto mb-10 py-2">
        Update Info
      </h2>
                <input type="text" className="input input-bordered py-2 border-black my-2" name="displayName" placeholder="Enter New Name" /> <br />
                <input type="text" className="input input-bordered py-2 border-black my-2" name="photoURL" placeholder="Enter Photo URL" /> <br />
                <input className="btn btn-sm btn-outline w-1/2 mx-auto btn-secondary" type="submit" value="Update" />
            </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
