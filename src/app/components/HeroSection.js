import React from "react";
import herostyle from "../../app/styles/herosection.module.css";
import common from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";

const HeroSection = ({ title, image }) => {
  return (
    <main className={herostyle.main_section}>
      <div className={common.container}>
        <div className={common.grid_two_section}>
          <div className={herostyle.hero_content}>
            <h1>{title}</h1>
            <p>
              Stay Informed: Get the scoop on the most anticipated movie
              releases, upcoming blockbusters, and exclusive behind-the-scenes
              insights. Our comprehensive news coverage keeps you up-to-date
              with the entertainment world.
            </p>
            <Link href="/movie">
              <button>EXPLORE MOVIE</button>
            </Link>
          </div>
          <div className={herostyle.hero_image}>
            <Image src={image} alt="watching moveis" width={500} height={500} />
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1690115495">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="white" // Set the fill color to white
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default HeroSection;
