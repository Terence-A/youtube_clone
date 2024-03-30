import TabFullSidebar from "./TabFullSidebar";

import homeDarkImg from "../assets/homeDarkImg.png";
import videoShortImg from "../assets/videoShortImg.png";
import subscriptionImg from "../assets/subscriptionImg.png";
import listImg from "../assets/listImg.png";
import historyImg from "../assets/historyImg.png";
import yourVideoImg from "../assets/yourVideoImg.png";
import clockImg from "../assets/clockImg.png";
import userImg from "../assets/userImg.png";
import thumbUpImg from "../assets/thumbUpImg.png";

const FullSidebar = () => {
  return (
    <aside>
      <nav>
        <ul className="flex flex-col mt-8 pl-4 border-b border-b-gray-300 w-72 pb-4">
          <TabFullSidebar image={homeDarkImg} title="Home" />
          <TabFullSidebar image={videoShortImg} title="Shorts" />
          <TabFullSidebar image={subscriptionImg} title="Subscriptions" />
        </ul>

        <ul className="flex flex-col mt-4 pl-4 border-b border-b-gray-300 w-72 pb-4">
          <button className="flex items-center mb-2 w-72 hover:bg-gray-200 rounded-xl h-14">
            <h2 className="text-2xl font-semibold text-gray-700 pl-4 pr-4 ">
              You
            </h2>
            <p className="text-4xl pb-2 text-gray-700">&#8250;</p>
          </button>

          <TabFullSidebar image={userImg} title="Your Channel" />
          <TabFullSidebar image={historyImg} title="History" />
          <TabFullSidebar image={yourVideoImg} title="Your videos" />
          <TabFullSidebar image={clockImg} title="Watch Later" />
          <TabFullSidebar image={thumbUpImg} title="liked videos" />
        </ul>

        <ul className="flex flex-col mt-4 pl-4 border-b border-b-gray-300 w-72 pb-4">
          <h2 className="text-2xl font-semibold text-gray-700 pl-4 pr-4 my-2">
            Subscriptions
          </h2>
          <TabFullSidebar image={listImg} title="All subscriptions" />
        </ul>
      </nav>
    </aside>
  );
};

export default FullSidebar;
