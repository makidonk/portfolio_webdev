import SplashScreen from "./components/SplashScreen";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <SplashScreen />
        <div className="px-[20px] flex flex-col justify-center align-center">
          <p className="text-xl sm:text-3xl text-black  font-playfair pl-[40px] sm:pl-[60px] ">
            hi, my name is
          </p>
          <p className="text-6xl sm:text-8xl md:text-[200px] text-black font-extrabold font-anton">MATHILDA</p>
          <p className="text-xl sm:text-3xl  text-black  font-playfair pl-[20px] sm:pl-[50px]">
            and I'm a
          </p>
          <p className="text-2xl sm:text-5xl text-black font-extrabold pl-[60px] sm:pl-[90px] font-anton">
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
