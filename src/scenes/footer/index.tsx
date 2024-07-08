const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="my-6">
      <p className="text-center text-[1.2rem] font-bold text-white">
        "Your work is going to fill a large part of your life, and the only way
        to be truly satisfied is to do what you believe is great work. And the
        only way to do great work is to love what you do." - Steve Jobs
      </p>
      <p className="text-center text-[1.2rem] font-bold text-secondary-200">
        &copy; {year} - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
