import React from "react";

export const ShimmerCard = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-around gap-8 mt-20">
        <div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-96">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="lg:h-48 bg-gray-300 md:h-36 w-full object-cover object-center"></div>
                <div className="p-6">
                  <h2 className="bg-gray-300 animate-pulse h-4 w-1/4 mb-2"></h2>
                  <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-200"></h1>
                  <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-300"></p>
                  <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-300"></p>
                  <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-300"></p>
                  <div className="flex items-center flex-wrap ">
                    <a className="bg-indigo-200 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                    <span className="bg-indigo-200 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-96">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="lg:h-48 bg-gray-300 md:h-36 w-full object-cover object-center"></div>
                <div className="p-6">
                  <h2 className="bg-gray-300 animate-pulse h-4 w-1/4 mb-2"></h2>
                  <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-200"></h1>
                  <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-300"></p>
                  <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-300"></p>
                  <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-300"></p>
                  <div className="flex items-center flex-wrap ">
                    <a className="bg-indigo-200 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                    <span className="bg-indigo-200 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-96">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="lg:h-48 bg-gray-300 md:h-36 w-full object-cover object-center"></div>
                <div className="p-6">
                  <h2 className="bg-gray-300 animate-pulse h-4 w-1/4 mb-2"></h2>
                  <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-200"></h1>
                  <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-300"></p>
                  <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-300"></p>
                  <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-300"></p>
                  <div className="flex items-center flex-wrap ">
                    <a className="bg-indigo-200 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                    <span className="bg-indigo-200 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 w-96">
              <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                <div className="lg:h-48 bg-gray-300 md:h-36 w-full object-cover object-center"></div>
                <div className="p-6">
                  <h2 className="bg-gray-300 animate-pulse h-4 w-1/4 mb-2"></h2>
                  <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-200"></h1>
                  <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-300"></p>
                  <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-300"></p>
                  <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-300"></p>
                  <div className="flex items-center flex-wrap ">
                    <a className="bg-indigo-200 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
                    <span className="bg-indigo-200 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ShimmerMenuList = () => {
  return (
    <div className="mt-12">
      <div className="shadow justify-center p-4 mx-auto items-center w-8/12 animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1 w-6/12 ">
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>

            <div className="h-2 bg-slate-300 rounded"></div>
          </div>
          <div className="h-2 bg-slate-100 rounded"></div>
        </div>
        <div className="rounded-ml bg-slate-50 h-20 w-2/12"></div>
      </div>
    </div>
  );
};
