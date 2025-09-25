import "./App.css";
import { useEffect } from "react";
import Above from "./components/ahead";
import Header from "./components/header";
import Grid from "./components/product-grid";

function App() {
  useEffect(() => {
    const header = document.getElementById("main-header");
    const supportBarHeight =
      document.querySelector("#support-bar")?.offsetHeight || 0;

    function handleScroll() {
      if (window.scrollY > supportBarHeight) {
        header.classList.add("fixed", "top-0", "bg-white");
      } else {
        header.classList.remove("fixed", "top-0", "bg-white");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Above/>

      <Header />
      
      {/* Hero */}
      <div className="c-hero-landing w-full h-[450px] flex flex-col items-start pl-28 py-14">
        <h1 className="title font-dm text-7xl mb-3 text-gray-700">
          Quality Prints
        </h1>
        <div className="sub font-sf text-2xl font-bold mb-6 text-gray-500">
          Shipped to your doorstep
        </div>
        <div className="c-search">
          <form method="get" action="/designs/search" autoComplete="off">
            <label
              htmlFor="searchquery"
              className="font-sf--bold font-extrabold text-left text-gray-800 mb-1 block"
            >
              What would you like to print today?
            </label>
            <div className="input-con bg-white w-[600px] h-24 px-4 py-8">
              <input
                className="bg-inherit w-11/12 h-6 text-black"
                type="text"
                name="query"
                id="searchquery"
                placeholder="Search for Business cards, T-shirts, Mugs, etc"
              />
              <button type="submit">
                <img src="images/search.svg" alt="search" />
              </button>
            </div>
          </form>
          {/*
            <div className="absolute z-20 overflow-hidden c-search__results mt-1 right-5 left-5">
              <div className="hide-scroll overflow-y-scroll pr-8 h-full">
                <div className="bg-white">
                  <div className="bg-white c-suggestion">
                    <a href="#">
                      <div className="flex flex-row justify-between border-b border-gray-300">
                        <div className="p-5">
                          <h3 className="text-sm text-gray-900 font-sf mb-3"></h3>
                          <p className=" text-gray-800 font-light mt-1">
                            No Product Found{" "}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a href="/all-products" className="bg-gray-500">
                    <div className="p-2">
                      <p className="text-sm text-gray-900 text-center underline">
                        View all products
                      </p>
                    </div>
                  </a>
                </div>
              </div>
        </div>
        */}
        </div>

        <div className="absolute bottom-14 right-0">
          <img
            src="images/Card3_n9kqin.jpg"
            alt="card mockup"
            className="h-80"
          />
        </div>
      </div>
      <Grid/>
    </>
  );
}

export default App;
