import { useForm } from "react-hook-form";

const CreateTask = () => {

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
      }

    return (
        <div>
            <h2 className="text-2xl text-center border w-2/12 mx-auto py-2">Create A Task</h2>
            <div className="w-4/5 md:3/4 lg:w-10/12 mx-auto py-10 border my-5 p-5">
        
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
        
        
      </div>
        </div>
    );
};

export default CreateTask;