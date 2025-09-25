export default function Above() {
    return (
      <>
        {/* Support bar */}
        <div id="support-bar" className="w-full text-slate-700 z-20">
          <div className="w-full h-12 flex justify-center bg-white px-28">
            <div className="flex justify-between w-full items-center">
              <div className="c-nav__links hidden md:flex md:w-1/2 justify-start items-center">
                <a className="nav mr-12 no-underline " href="/cost-calculator">
                  Cost Calculator
                </a>
                <a className="nav mr-12 no-underline" href="/stores">
                  Discover Stores
                </a>
                <a className="nav no-underline" href="/track">
                  Track Orders
                </a>
              </div>
              <div className="flex justify-end items-center">
                <div className="flex justify-start flex-col gap-0 sm:pl-1">
                  <span className=" visible text-left my-0 py-0 font-semibold text-sm sm:inline hidden">
                    Need help? Call:
                  </span>
                  <div className="items-center space-x-1 md:flex hidden">
                    <a
                      href="tel:234.706.900.0083"
                      className="call-link text-sm"
                    >
                      +2347069000083
                    </a>
                    <span className="mx-1 text-sm font-semibold hidden md:block">
                      or
                    </span>
                    <a
                      href="tel:234.903.500.0505"
                      className="call-link text-sm"
                    >
                      +2349035000505
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center pl-2">
                <a
                  href="https://wa.me/2348091085333"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/whatsapp.svg"
                    alt="contact us on +2348099561000"
                  />
                </a>
              </div>
              <div className="c-country-select flex items-center rounded-3xl border-1 border-solid px-3 py-1.5 border-gray-400">
                <img
                  src="images/nigerian-flag.svg"
                  alt="nigerian flag"
                  className="inline-block mr-2"
                />
                <span>Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}