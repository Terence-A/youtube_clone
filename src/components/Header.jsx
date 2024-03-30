import menuImg from "../assets/menuImg.png";
import youtubeImg from "../assets/youtubeImg.png";
import microphoneImg from "../assets/microphoneImg.png";
import searchImg from "../assets/searchImg.png";
import videoAddImg from "../assets/videoAddImg.png";
import bellImg from "../assets/bellImg.png";

const Header = ({ showSidebar }) => {
  return (
    <header className="flex justify-between py-4 px-8">
      <div className="flex">
        <div className="flex items-center">
          <button onClick={showSidebar} className="  mr-6">
            <img
              src={menuImg}
              alt="hamburger icon"
              className="size-12   rounded-xl p-3 hover:bg-gray-200 hover:rounded-full "
            />
          </button>
          <button className="flex">
            <img src={youtubeImg} alt="youtube icon" className="size-10" />
            <h1 className="text-3xl font-bold tracking-tighter">YouTube</h1>
            <p className="text-sm h-full tracking-tighter">CA</p>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4 ">
        <div className="flex items-center">
          <div className="flex rounded-l-full items-center pl-8">
            <input
              type="text"
              placeholder="Search"
              className="text-2xl pl-12  h-12 outline-none border border-gray-300 rounded-l-full focus:border focus:border-gray-700 focus:rounded-l-full focus:pl-12 w-[600px]"
            />
          </div>
          <div className="bg-gray-100/60 h-12 border border-gray-300 border-l-0 rounded-r-full hover:bg-gray-200">
            <button className="h-full pr-5">
              <img
                src={searchImg}
                alt="magnify glass icon"
                className="size-7 ml-6 opacity-55 "
              />
            </button>
          </div>
        </div>

        <button>
          <img
            src={microphoneImg}
            alt="icon of microphone"
            className="size-12 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
          />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <img
            src={videoAddImg}
            alt="video image"
            className="opacity-60 size-12 hover:bg-gray-300 p-2 rounded-full"
          />
        </button>
        <button>
          <img
            src={bellImg}
            alt="video image"
            className="opacity-60 size-12 hover:bg-gray-300 p-2 rounded-full"
          />
        </button>
        <button>
          <p className="text-2xl  bg-blue-900 hover:bg-blue-800 hover:shadow text-gray-50 rounded-full size-10 pt-1  ">
            T
          </p>
        </button>
      </div>
    </header>
  );
};

export default Header;
