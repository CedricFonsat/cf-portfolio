import image from "../assets/header.png";

const Header = () => {
  return (
    <header className="w-full md:h-96 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F8F7F3]">
      <div className=" p-6 ">
        <div className="relative mb-2">
          <p className="text-6xl md:text-8xl font-bold">Developer</p>
          <p className="text-6xl md:text-8xl font-bold">Full Stack</p>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md mr-2">
                Web app
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Mobile app
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Node JS
              </div>
            </div>
            <div className="slide ">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                React JS
              </div>
            </div>
            <div className="slide ">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                React Native
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                TailwindCSS
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Typescript
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Redux
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Supabase
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Mongo DB
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md mr-2">
                Web app
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Mobile app
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Node JS
              </div>
            </div>
            <div className="slide ">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                React JS
              </div>
            </div>
            <div className="slide ">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                React Native
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                TailwindCSS
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Typescript
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Redux
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Supabase
              </div>
            </div>
            <div className="slide">
              <div className="px-3 py-2 bg-black text-white rounded-md">
                Mongo DB
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 flex justify-center">
        <img className="h-full w-auto" src={image} alt="header image" />
      </div>
    </header>
  );
};

export default Header;
