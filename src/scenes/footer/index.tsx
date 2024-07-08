const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="my-6">
      <p className="text-center text-[1.2rem] font-bold text-white"></p>
      <p className="text-center text-[1.2rem] font-bold text-secondary-200">
        &copy; {year} - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
