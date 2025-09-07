import SplashScreen from "./components/SplashScreen";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <SplashScreen />
        <div className="px-[20px] flex flex-col justify-center align-center">
          <p className="text-[4vw] xl:text-[2vw] text-black  font-playfair pl-[40px] lg:pl-[130px] md:pl-[90px] leading-none">
            hi, my name is
          </p>
          <p className=" text-black font-extrabold font-anton text-[23vw] xl:text-[19vw] text-center xl:text-left leading-none">
            MATHILDA
          </p>
          <p className="text-[4vw] xl:text-[2vw] text-black  font-playfair pl-[20px] sm:pl-[50px] leading-none">
            and I'm a
          </p>
          <p className="text-[10vw] xl:text-[7vw] text-black font-extrabold pl-[60px] sm:pl-[90px] md:pl-[130px] font-anton">
            WEB DEVELOPER
          </p>
          <img
            src="./pic3-crop.png"
            alt="Mathilda Logo"
            className={`xl:block absolute object-contain hidden right-[5vw] top-[80px] scale-x-[-1] h-[100vh]`}
          />
          <p className=" text-black pl-[20px] sm:px-[50px]  font-playfair xl:w-[50vw] md:text-2xl text-md pb-3">
            I have a background in web dev studies and hands-on experience as a
            frontend developer. I build modern web apps using React, TypeScript,
            Tailwind CSS, and Node.js - and I’m always curious and excited to
            learn new technologies. 
          </p>
            <p className=" text-black pl-[20px] sm:px-[50px] font-playfair xl:w-[50vw] md:text-2xl text-md pb-3">
            Right now, I’m actively looking for a
            full-time position where I can grow as a developer, contribute to a
            team, and keep building great things. This portfolio is a work in
            progress – just like my journey as a developer.
          </p>
           <p className=" text-black pl-[20px] sm:px-[50px] font-playfair xl:w-[50vw] md:text-2xl text-md">
            This portfolio is a work in
            progress – just like my journey as a developer.
          </p>
          <div className="flex flex-row xl:hidden">
            <button>contact me</button>
            <img
            src="./pic3-crop.png"
            alt="Mathilda Logo"
            className={` object-contain scale-x-[-1] h-[50vh] align-left`}
          />
          </div>
          
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
