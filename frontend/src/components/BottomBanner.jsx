import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-24 @container">
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden sm:h-[calc(80cqw+29rem)] sm:object-cover sm:object-bottom sm:rounded-lg"
      />
      <div className="absolute inset-x-0 top-0 bottom-[42%] sm:bottom-[80cqw] md:bottom-0 flex flex-col items-center justify-center sm:justify-end sm:pb-10 md:justify-center md:pb-0 md:items-end px-6 md:pr-16 lg:pr-24">
        <div className="w-full max-w-sm sm:max-w-md md:w-[46%] md:max-w-xl">
          <h1 className="text-2xl sm:text-4xl md:text-xl xl:text-3xl font-semibold text-primary mb-6 sm:mb-8 md:mb-3 xl:mb-6 text-center md:text-left">
            Why We Are the Best?
          </h1>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 mt-4 sm:mt-6 md:mt-2 xl:mt-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 sm:w-14 md:w-8 xl:w-12 shrink-0"
              />
              <div>
                <h3 className="text-lg sm:text-2xl md:text-base xl:text-xl font-semibold leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500/70 text-sm sm:text-lg md:hidden lg:block lg:text-sm xl:text-base leading-snug mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
