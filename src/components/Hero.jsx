import Photo from "../assets/photo.jpg";
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row md:gap-6 pb-6">
      <div className=" h-full w-full md:h-110 md:w-145">
        <img
          src={Photo}
          alt="Profile"
          className="h-full w-full object-cover rounded-b-xl"
        />
      </div>

      <div
        className="h-150 w-full md:h-110 md:w-200 rounded-xl 
          flex flex-col px-5 py-2 md:px-10 md:py-15 
          justify-center  md:justify-end bg-yellow-100/50 backdrop-blur-md "
      >
        <h1 className="text-5xl md:text-4xl font-medium">
          Hi there, I'm someone!
        </h1>
        <p className="text-2xl md:text-lg mt-10 md:mt-3 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ad
          non. Ut nostrum blanditiis, quibusdam repellendus omnis fugiat non
          accusantium?
        </p>
      </div>
    </section>
  );
};

export default Hero;
