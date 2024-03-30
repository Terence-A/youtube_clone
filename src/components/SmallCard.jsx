import smallCardsData from "../smallCardsData";

const SmallCard = () => {
  return (
    <section>
      <ul className="flex flex-wrap p-6 space-x-4">
        {smallCardsData.map((card) => (
          <button key={card.id}>
            <li className="mb-12">
              <div className="w-80 h-80">
                <img
                  src={card.image}
                  alt="card image"
                  className="rounded-xl hover:rounded-sm duration-200 w-96 h-48"
                />
                <div className="flex pt-2 ">
                  <img
                    src={card.logo}
                    alt="card logo"
                    className="size-12 rounded-full mr-4"
                  />
                  <div className="flex flex-col  items-start ">
                    <h1 className="text-xl font-bold text-left">
                      {card.title}
                    </h1>
                    <h2 className="text-gray-600 text-lg">{card.user}</h2>
                    <p className="text-gray-600 text-lg">{card.stats}</p>
                  </div>
                </div>
              </div>
            </li>
          </button>
        ))}
      </ul>
    </section>
  );
};

export default SmallCard;
