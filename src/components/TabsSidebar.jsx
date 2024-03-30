const TabsSidebar = ({ image, title }) => {
  return (
    <li>
      <button className="hover:bg-gray-200 hover:rounded-xl  ">
        <div className="flex flex-col items-center w-24 py-4">
          <img src={image} alt="home icon" className="size-8 opacity-50" />
          <p className="">{title}</p>
        </div>
      </button>
    </li>
  );
};

export default TabsSidebar;
