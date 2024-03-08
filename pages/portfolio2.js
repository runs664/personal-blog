// import { Callout } from 'nextra/components'
// import SkillBar from '@/components/SkillBar.js'
// import Project from '@/components/Project.js'

// # Hi, im Harun!

// ## About

// This is a portfolio of my work. I am an Information Engineering undergraduate student in Gadjah Mada University with a passion for building things and working with data. I have brief experience in web development, data engineering, and machine learning. I am always looking for new opportunities to learn, grow, and collaborate with others.

// ## Experience

// $$
// 4+9-392131=?
// $$

// This is a portfolio of my work. I am an Information Technology undergraduate student in Gadjah Mada University with a passion for building things and working with data. I have brief experience in web development, data engineering, and machine learning. I am always looking for new opportunities to learn and grow and collaborate with others.

// ## Skills

// <SkillBar skill="Python" level={90} />

// ## Projects

// <div className="grid grid-cols-1 md:grid-cols-2 gap-[3%]">
// <Project
//     title="Website KPU KMTETI 2023"
//     description="Platform pemilu internal himpunan mahasiswa departemen teknik elektro dan teknologi informasi UGM"
//     status="Finished"
//     link="https://github.com"
//     image="/assets/dm/l10_1.png"
// />

// <Project
//     title="Beanmaster"
//     description="Website project perlombaan internal DTETI FT UGM"
//     status="Finished"
//     link="https://github.com"
//     image="/assets/dm/l10_1.png"
// />
// <Project
//     title="Personal Page"
//     description="Website personal yang berisi portofolio serta catatan kuliah"
//     status="Ongoing"
//     link="https://github.com"
//     image="/assets/dm/l10_1.png"
// />
// <Project
//     title="Website National Electrical Power System Competition 2024"
//     description="Website perlombaan nasional yang diselenggarakan oleh DTETI FT UGM"
//     status="Ongoing"
//     link="https://github.com"
//     image="/assets/dm/l10_1.png"
// />
// </div>

// ## Contact

// This is a portfolio of my work. I am an Information Engineering undergraduate student in Gadjah Mada University with a passion for building things and working with data. I have brief experience in web development, data engineering, and machine learning. I am always looking for new opportunities to learn and grow and collaborate with others.

/* <div className='border-[3px] overflow-hidden m-auto max-w-[736px]'>
<iframe scrolling="no" src="https://gco.iarc.fr/today/en/dataviz/bars" className='border-[0] ml-[-185px] h-[1200px] mt-[-500px] w-[926px]'>
</iframe>
</div> */


import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            autoPlay={true}
            loop={true}
            muted={true}
            className="min-w-full min-h-full absolute object-cover z-[2]"
          >
          <source
            src="/ContinuousMotionPer4.mp4"
            type="video/mp4"
          />
          </video>
        </div>
        <div class="video-content space-y-2">
            <h1 class="roman">full Hero Video</h1>
            <h3 class="font-light text-3xl">with TailwindCSS</h3>
        </div>
    </section>
    <section class="bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center ${inter.className}">
        <div class="mx-auto max-w-3xl text-center">
          <h1
            class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Understand User Flow.

            <span class="sm:block"> Increase Conversion. </span>
          </h1>

          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea!
          </p>

          

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
