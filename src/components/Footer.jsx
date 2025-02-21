import { footerLinks } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='py-5 sm:px-10 px-5'>
      <div className='screen-max-width'>
        <div>
          <p className='font-semibold text-gray text-xs'>
            More ways to shop:{" "}
            <span className='underline text-blue pr-1'>
              Find an Apple Store{" "}
            </span>{" "}
            or <span className='underline text-blue pr-1'> other retailer</span>{" "}
            near you
          </p>

          <p className='font-semibold text-gray text-xs'>
            Or call 0008000-040-3231
          </p>
        </div>

        <div className='bg-neutral-700 my-5 h-[1px] w-full' />

        <div className='flex md:flex-row flex-col md:text-center justify-between'>
          <p className='font-semibold text-gray text-xs'>
            Copyright &copy; {year} Apple Inc. All rights reserved.
          </p>

          <div className='flex gap-x-3 pt-1'>
            {footerLinks.map((link, i) => (
              <p key={link} className='font-semibold text-gray text-xs '>
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
