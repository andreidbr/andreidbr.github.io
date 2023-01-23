import Image from 'next/image';

import illu from '@modules/assets/andreidbr.png';
import eczar from '@modules/shared/utils/font';

const HeroSection = () => {
  return (
    <section className="mx-auto mt-12 flex max-w-6xl flex-col items-center px-4 md:flex-row">
      <div className="flex flex-1 flex-col items-center md:items-start">
        <div className="inline-block rounded-md bg-bg-4 px-6 py-3 font-semibold">
          <span role="img">👨‍💻</span>
          Hello World
        </div>
        <div className="mt-6">
          <h1
            className={`${eczar.className} mf:text-6xl text-center text-5xl font-semibold leading-tight text-earth-2 md:text-left`}
          >
            {"I'm"} Andrei Dobra, a Test Automation Engineer
          </h1>
        </div>
      </div>
      <div className="mt-20 flex-1 md:mt-0">
        <Image
          src={illu}
          placeholder="blur"
          alt="Andrei Dobra"
          className="mx-auto object-cover"
          width={400}
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;
