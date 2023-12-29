const Guilds = () => {
  return (
    <div>
        <h2 className="text-2xl text-center border w-4/12 mx-auto py-2 my-10">
        Top Guilds
      </h2>
      {/* cards */}
      <div >
        <div className="card w-96 bg-base-100 shadow-xl image-full">
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
        </div>
      </div>
    </div>
  );
};

export default Guilds;
