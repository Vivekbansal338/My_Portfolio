import React from "react";

const footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2">Find me on these platforms:</h5>
            <div className="mt-6">
              <a
                href="#"
                className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="#"
                className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-sm py-1">
              Made with{" "}
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className=" text-sm font-semibold py-1"
              >
                Notus JS
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
