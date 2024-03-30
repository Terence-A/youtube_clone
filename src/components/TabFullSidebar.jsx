const TabFullSidebar = ({ image, title }) => {
  return (
    <li>
      <button className="hover:bg-gray-200 hover:rounded-xl  ">
        <div className="flex items-center w-72 pl-4 py-4">
          <img
            src={image}
            alt="home icon"
            className="size-8 opacity-70 mr-12"
          />
          <p className="text-xl">{title}</p>
        </div>
      </button>
    </li>
  );
};

export default TabFullSidebar;
