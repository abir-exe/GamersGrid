import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const Register = () => {

    const { googleSignIn, createUser, updateUserProfile } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        .then(() => {
            
                console.log(result.user)
                toast.success('Registration Successful!')
                navigate(from)
            
        })
          
}
  )}  
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      toast.success("Successfully Signed in!");
      navigate(from, { replace: true });
    });
  };


  return (
    <div>
      <div className="w-2/6 mx-auto uppercase text-3xl font-exo text-center border-b my-10 py-1 mb-20">
   Join Our Community
      </div>

      <div>
      <div className="w-4/5 md:3/4 lg:w-2/4 mx-auto py-20 border my-10 p-10">
        <h2 className="text-4xl text-center font-bold">Please Register</h2>
        <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
           {/* register your input into the hook by invoking the "register" function */}
        <input type="text" className="input input-bordered" placeholder="Your Name" {...register("name", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.name && <span className="text-red-500">This field is required</span>}

          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            {/* register your input into the hook by invoking the "register" function */}
        <input type="text" className="input input-bordered" placeholder="Photo URL" {...register("photoURL", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.photoURL && <span className="text-red-500">This field is required</span>}
            
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input type="email" className="input input-bordered" placeholder="Your Email" {...register("email", { required: true })} />
             {/* errors will return when field validation fails  */}
        {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input type="password" className="input input-bordered" placeholder="Set Password" {...register("password", { required: true })} />
             {/* errors will return when field validation fails  */}
        {errors.password && <span className="text-red-500">This field is required</span>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* {registerError && <p className="text-red-600"> {registerError} </p>}
          {success && <p className="text-green-600">Registration Successful</p>} */}

          <div className="form-control w-2/3 mx-auto mt-6">
          <input className="btn btn-primary" value="Register" type="submit" />
            {/* <button className="btn btn-primary">Register</button> */}
          </div>
        </form>
        <p className="text-center my-3 mb-2">
          Already have an account? Please{" "}
          <Link className="text-sm font-bold text-blue-600" to="/login">
            login
          </Link>
        </p>
        <div onClick={handleGoogleSignIn} className="cursor-pointer">
        <div
          
          className="flex text-sm md:text-md lg:text-xl justify-center items-center gap-2 border w-2/3 mx-auto px-3  py-2"
        >
          <FcGoogle className="text-2xl"></FcGoogle>
          <button className="">Register With Google</button>
        </div>
        </div>
      </div>
    </div>



      
    </div>
  );
};

export default Register;
