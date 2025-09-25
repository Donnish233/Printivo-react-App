export default function Header() {
    return (
      <>
        {/* Sticky nav */}
        <div id="main-header" className="w-dvw bg-[#ece8d9] z-10">
          <div className="inner-nav py-10 px-28 flex justify-between items-center h-16">
            <div className="c-logo flex-shrink-0">
              <a className="active" href="/">
                <div className="flex items-center space-x-2">
                  <img src="images/printivo-logo.svg" alt="Printivo logo" />
                </div>
              </a>
            </div>
            <div className="nav-items flex">
              <ul className="c-nav__links flex mr-6 main-nav-list">
                <li className="c-nav__listitem mr-6">
                  <a className="nav-link no-underline" href="/all-products">
                    All Products
                  </a>
                </li>
                <a className="no-underline nav-link mr-6" href="/reseller">
                  Become a Reseller
                </a>
                <a
                  href="https://merch.printivo.com"
                  target="_blank"
                  className="no-underline nav-link mr-6"
                >
                  Merch Store
                </a>
                <a className="no-underline nav-link mr-6" href="/sell">
                  Marketplace
                </a>
              </ul>
              <div className="c-nav__userarea flex items-center">
                <div className="c-logged">
                  <div className="c-logged__out flex">
                    <button
                      type="button"
                      className="relative bottom-1.5 mr-6 text-justify text-red-400 font-sf h-9"
                    >
                      Sign in
                    </button>
                    <a
                      className="no-underline nav-link mr-6"
                      href="/members/sign-up"
                    >
                      Create Account
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <a
                    className="c-cart__icon flex-shrink-0 relative bottom-1"
                    href="/cart"
                  >
                    <img src="images/cart.svg" alt="cart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}