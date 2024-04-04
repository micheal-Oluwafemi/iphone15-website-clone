import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "./../utils/index";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      delay: 1.5,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      duration: 1,
    });
  }, []);

  return (
    <section
      id='highlights'
      className='w-screen overflow-x-hidden h-full common-padding bg-zinc'
    >
      <div className='screen-max-width'>
        <div className='mb-12 md:flex w-full items-end justify-between'>
          <h1 id='title' className='section-heading'>
            Get the highlights
          </h1>

          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Watch the film <img src={watchImg} alt='watch' className='ml-2' />
            </p>

            <p className='link'>
              Watch the event{" "}
              <img src={rightImg} alt='watch' className='ml-2' />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
