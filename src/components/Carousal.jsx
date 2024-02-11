import React from 'react';
import { Carousel } from 'antd';

const AppCarousel = () => (
  <Carousel autoplay >
   
    <div>
      <img className='w-full h-[calc(100vh-120px)] object-cover' src="https://images.unsplash.com/photo-1556636530-6b7482d80e3d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D"/>
    </div>
    <div   >
    <img className='w-full h-[calc(100vh-120px)] object-cover' src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D"/>
    </div>
    <div   >
    <img className='w-full h-[calc(100vh-120px)] object-cover' src="https://resources.reed.co.uk/courses/coursemedia/417391/9fc3516e-5b7c-491a-b95e-c6a763c6c636_cover.webp"/>
    </div>
    <div   >
    <img className='w-full h-[calc(100vh-120px)] object-cover' src=" https://scontent.fisb6-1.fna.fbcdn.net/v/t39.30808-6/425275363_903054261826978_3677853815645715261_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=VOr_pBTEGDoAX9WDmz5&_nc_zt=23&_nc_ht=scontent.fisb6-1.fna&oh=00_AfCyINmnjseY34SiyvHqpiQqW39DUYtpq3ruxv435yXr0g&oe=65C4AFB0
   "/>
    </div>

  </Carousel>
);
export default AppCarousel;