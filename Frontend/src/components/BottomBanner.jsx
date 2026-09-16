import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center px-6 pt-16 md:pt-0 md:pr-16 lg:pr-24">
        <div className="w-full max-w-sm md:w-[46%] md:max-w-xl">
          <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center md:text-left">
            Why We Are the Best?
          </h1>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 mt-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 md:w-12 shrink-0"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500/70 text-sm md:text-base leading-snug mt-1">
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
