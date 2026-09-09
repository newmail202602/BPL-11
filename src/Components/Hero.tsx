function Hero() {
  return (
    <section className="container bg-gray-800 bg-[url('/public/bg-shadow.png')] bg-cover bg-center w-full mx-auto py-10 rounded-3xl text-center">
      <div>
        <img className="mx-auto" src="/public/banner-main.png" />
        <h1 className="text-3xl text-white font-bold mt-4">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-300 mt-4">Beyond Boundaries Beyond Limits</p>

        <button className="mt-4 border border-[#E7FE29] rounded-[10px] px-1 py-2 ">
          <small className="bg-[#E7FE29] px-4 py-2 rounded-[7px]">
            Claim Free Credit
          </small>
        </button>
      </div>
    </section>
  );
}
export default Hero;
