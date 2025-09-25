export default function ProductCard({image, altName, price, quantity}) {
    return (
      <div className="c-preview__box font-sf cursor-pointer text-black w-64 border border-gray-200">
        <div className="c-box__image overflow-hidden">
          <img className="h-56 w-full transition-transform duration-300 ease-in-out hover:scale-115" src={image} alt={altName} />
        </div>
        <div className="c-box__details p-4 font-sf--bold h-52 w-full text-xl text-gray-700">
          <h3 className="w-full mb-5 text-base font-bold">{altName}</h3>
          <p className="uppercase mb-2 text-xs h-5 font-bold text-gray-500">starting at</p>
          <h3 className="mb-5 font-bold">
            ₦{price} <span className="text-sm text-gray-500">per {quantity}</span>
          </h3>
          <a
            className="Button__StyledLink-sc-1f6zs39-1 kdzEVG"
            href="/product/two-sided-business-cards"
          >
            <span className="inline-flex items-center h-10 py-2.5 px-3.5 rounded-sm w-48 bg-red-400 text-amber-100 text-base">
              Browse{" "}
              <span className="truncate w-32 inline-block ml-1">{altName}</span>{" "}
              &gt;
            </span>
          </a>
        </div>
      </div>
    );
};