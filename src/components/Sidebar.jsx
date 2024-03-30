import homeDarkImg from "../assets/homeDarkImg.png";
import videoShortImg from "../assets/videoShortImg.png";
import subscriptionImg from "../assets/subscriptionImg.png";
import youImg from "../assets/youImg.png";
import TabsSidebar from "./TabsSidebar";

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul className="flex flex-col mt-8">
          <TabsSidebar image={homeDarkImg} title="Home" />
          <TabsSidebar image={videoShortImg} title="Shorts" />
          <TabsSidebar image={subscriptionImg} title="Subscriptions" />
          <TabsSidebar image={youImg} title="You" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
