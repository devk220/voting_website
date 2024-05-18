import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (documentHeight - scrollTop === windowHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='text-center'
      style={{
        position: "fixed", // Change from absolute to fixed
        bottom: "0",
        width: "100%",
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "greenyellow",
        fontFamily: "sans-serif",
        display: showFooter ? 'block' : 'none'
      }}
    >
      <h2>CopyRight@DevkiranDass 2024</h2>
    </div>
  );
};

export default Footer;
