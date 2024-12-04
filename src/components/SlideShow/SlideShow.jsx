

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import img3 from '../../assets/images/img-3.jpg';
import img4 from '../../assets/images/img-4.png';
import img5 from '../../assets/images/img-5.jpg';
import img6 from '../../assets/images/img-6.jpg';
import img7 from '../../assets/images/img-7.png';
import img8 from '../../assets/images/img-8.png';
import img9 from '../../assets/images/img-9.jpg';
import img10 from '../../assets/images/img-10.jpg';
import img11 from '../../assets/images/img-11.jpg';
import img12 from '../../assets/images/img-12.jpg';
import img13 from '../../assets/images/img-13.jpg';
import img14 from '../../assets/images/img-14.jpg';
import img24 from './../../assets/images/img-24.jpg';
import img23 from './../../assets/images/img-23.jpg';
import img25 from './../../assets/images/img-25.jpg';
import img15 from './../../assets/images/img-15.jpg';
import img16 from './../../assets/images/img-16.jpg';
import img17 from './../../assets/images/img-17.jpg';
import img18 from './../../assets/images/img-18.jpg';
import img19 from './../../assets/images/img-19.jpg';
import img20 from './../../assets/images/img-20.jpg';
import img21 from './../../assets/images/img-21.jpg';
import img22 from './../../assets/images/img-22.jpg';


export const Slideshow = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
    img14, img15, img16, img17, img18, img19, img20, img21, img22,img23, img24, img25
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 40000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        marginBottom: 4,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        src={images[currentImage]}
        alt={`slide-${currentImage}`}
        style={{ width: '100%', height: 'auto', maxWidth: '1024px', zIndex: '0'}}
      />
    </Box>
  );
};

