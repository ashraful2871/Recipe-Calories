const Banner = () => {
  return (
    <div
      className="hero h-[650px] rounded-3xl mb-24"
      style={{
        backgroundImage: `url(https://i.ibb.co.com/ZmRk758/Rectangle-1-2.png)`,
      }}
    >
      <div className=""></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">
            Discover an exceptional cooking <br />
            class tailored for you!
          </h1>
          <p className="mb-5">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding <br />
            problems to become an exceptionally well world-class Programmer.
          </p>
          <button className="btn text-lg font-semibold px-7  bg-[#0BE58A] rounded-full">
            Get Started
          </button>
          <button className="btn text-lg font-semibold px-7 bg-transparent text-[#ffffffb9] ml-5 rounded-full">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
