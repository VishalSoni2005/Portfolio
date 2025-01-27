export default function CardFive() {
  return (
    <div className="h-screen bg-[#f2f2f2] text-black flex items-center justify-center overflow-hidden rounded-xl">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-5xl px-6 py-16 mx-auto">
          <div className="grid gap-6 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-green-500">
                <h3 className="text-4xl font-bold font-serif">Education</h3>
              </div>
            </div>

            <div className="relative col-span-12 px-4 space-y-8 sm:col-span-9">
              <div className="col-span-12 space-y-10 relative px-4 sm:col-span-8 sm:space-y-10 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-5 sm:before:h-5 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400 hover:shadow-2xl transition-all duration-500 rounded-xl p-6 bg-white">
                  <h3 className="text-2xl font-semibold tracking-wide">
                    Bachelor of Technology in Information Technology
                  </h3>
                  <time className="text-lg font-medium tracking-wide uppercase text-gray-500">
                    2023 - 2027
                  </time>
                  <p className="mt-3 text-lg">
                    Pursuing B.Tech from{' '}
                    <span className="font-medium">
                      International Institute of Information Technology, Pune
                    </span>
                  </p>
                  <p className="mt-3 text-lg font-medium">
                    CGPA: 8 (Till 4th Semester)
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-5 sm:before:h-5 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400 hover:shadow-2xl transition-all duration-500 rounded-xl p-6 bg-white">
                  <h3 className="text-2xl font-semibold tracking-wide">
                    Higher Secondary (Science)
                  </h3>
                  <time className="text-lg font-medium tracking-wide uppercase text-gray-500">
                    2020 - 2022
                  </time>
                  <p className="mt-3 text-lg">
                    Completed Higher Secondary (Science) from{' '}
                    <span className="font-medium">
                      Teresa International Academy, Patna
                    </span>
                  </p>
                  <p className="mt-3 text-lg font-medium">Percentage: 88.9%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
