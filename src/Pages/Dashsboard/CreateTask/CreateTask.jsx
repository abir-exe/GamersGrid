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
  };

  return (
    <div>
      <h2 className="text-2xl text-center border w-2/12 mx-auto py-2">
        Create A Task
      </h2>
      <div className="w-4/5 md:3/4 lg:w-10/12 mx-auto py-10 border my-5 p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              type="text"
              className="input input-bordered"
              placeholder="Task Title"
              {...register("title", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.title && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              type="text"
              className="input input-bordered"
              placeholder="Photo URL"
              {...register("photoURL", { required: false })}
            />
            {/* errors will return when field validation fails  */}
            {errors.photoURL && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              type="text"
              className="input input-bordered"
              placeholder="Task Description"
              {...register("description", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.description && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              className="input input-bordered disabled:"
              {...register("priority", { required: true })}
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
              <option value="extreme">Extreme</option>
            </select>

            {errors.priority && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="form-control w-2/3 mx-auto mt-6">
            <input
              className="btn btn-secondary text-white"
              value="Create Task"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
