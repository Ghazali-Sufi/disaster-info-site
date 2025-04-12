const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center px-4 sm:px-6 md:px-14 bg-[#f9f9f9] h-[82vh] max-[1000]:h-[50vh] "
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="relative z-10 flex items-center h-full text-white">
        <div className="text-left w-full max-w-[50rem] max-[1000]:px-[20px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Welcome to Somalia Disaster Info
          </h1>
          <p className="text-xl max-[1000]:max-w-[26.5rem] sm:text-2xl md:text-3xl lg:text-4xl">
            Stay informed about natural disasters, warnings, and safety updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
