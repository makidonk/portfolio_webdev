import SplashScreen from "./components/SplashScreen";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <SplashScreen />
        <div className="px-[20px] flex flex-col justify-center align-center">
          <p className="text-[4vw] md:text-[2vw] text-black  font-playfair pl-[40px] sm:pl-[90px] leading-none">
            hi, my name is
          </p>
          <p className=" text-black font-extrabold font-anton text-[23vw] md:text-[19vw] text-center lg:text-left leading-none">MATHILDA</p>
          <p className="text-[4vw] md:text-[2vw] text-black  font-playfair pl-[20px] sm:pl-[50px] leading-none">
            and I'm a
          </p>
          <p className="text-[10vw] md:text-[7vw] text-black font-extrabold pl-[60px] sm:pl-[90px] md:pl-[130px] font-anton">
            WEB DEVELOPER
          </p>

          {/* <a
            href="/projects"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            my projects
          </a> */}
        </div>
      </main>
    </>
  );
}
