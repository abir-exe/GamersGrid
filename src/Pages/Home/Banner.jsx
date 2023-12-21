/* eslint-disable react/no-unescaped-entities */


const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/tZpTkV0/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-exo">Hello Gamers!</h1>
          <p className="mb-5 font-exo">
          Your dedicated task management hub for gamers. Coordinate raids, track achievements, and level up your teamwork seamlessly. Join the gaming revolution!
          </p>
          <button className="btn text-white bg-[#0f172a] text-[18px] hover:text-xl btn-wide">LET'S EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
