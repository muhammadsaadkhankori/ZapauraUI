import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styleImageGallery.css'; // Make sure to import the CSS file

import image1 from './assets/streetScene.jpg'

import image2 from './assets/metaverseConcert.jpg'

import image3 from './assets/VR_Gallery_Museum_Baked.jpg'
import image4 from './assets/Vr_art_gallery.jpg'
import image5 from './assets/metaverse_art_gallery.jpg'
import image6 from './assets/australian_Art_gallery.jpg'

const cardsData = [
    {
        title: 'Public Street',
        text: 'A futuristic boulevard where technology and urban life converge. Every wall serves as a canvas for an array of technological marvels, playing videos that capture the essence of innovation and digital advancement.',
        img: image1,
        url: 'https://www.another-example.com' // first link
    },
    {
        title: 'Meta Wall',
        text: 'The MetaWall is a monumental display within the metaverse, a digital canvas that stretches seemingly into infinity. It is the heart of the virtual concert experience, a dynamic wall that reacts and evolves in real-time with the performances.',
        img: image2,
        url: 'https://www.another-example.com' // Second link
    },
    {
        title: 'VR Gallery  Museum  Baked',
        text: 'Experience the city life in our modern flaThe Metaverse Art Gallery and Meeting Garden is a captivating fusion of artistic wonder and serene collaboration space, all nestled within the boundless realm of the metaverse. This unique virtual destination offers an unparalleled experience that marries the introspective beauty of art with the connective power of a communal gardent.',
        img: image3,
        url: 'https://www.another-example.com' // Third link
    },
    {
        title: 'VR Art Gallery',
        text: 'A VR Art Gallery is an immersive exhibition space that exists within the realm of virtual reality, offering an innovative platform for displaying and experiencing art. This digital gallery transcends physical limitations, allowing visitors from all corners of the globe to don a VR headset and step into a world where art takes on new dimensions.',
        img: image4,
        url: 'https://www.another-example.com' // Fourth link
    },
    {
        title: 'Metaverse Art Gallery',
        text: 'Experience the city life in our modern flaThe Metaverse Art Gallery and Meeting Garden is a captivating fusion of artistic wonder and serene collaboration space, all nestled within the boundless realm of the metaverse. This unique virtual destination offers an unparalleled experience that marries the introspective beauty of art with the connective power of a communal gardent.',
        img: image5,
        url: 'https://www.another-example.com' // Fifth link
    },
    {
        title: 'Australia VR Art Gallery',
        text: 'The Australia VR Art Gallery is a pioneering virtual reality space dedicated to celebrating and showcasing the rich tapestry of Australian art. This immersive gallery transcends geographical boundaries, allowing visitors from around the world to don VR headsets and step into a realm where the vibrant art scene of Australia comes to life.',
        img: image6,
        url: 'https://www.another-example.com' // Sixth link
    },
    
    ];

const Gallery = () => {
    return (
      <div className='introtitle'>
        <div>
        <h1 className='introtitle_'> Explore and uncover the hidden worlds of space </h1>
        </div>

        <div className="gallery-container">

        {cardsData.map((card, index) => (
          <a href={card.url} key={index} target="_blank" rel="noopener noreferrer" className="gallery-card">
          <div className="gallery-card" key={index}> 
            
            <img src={card.img} alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              
            </div>
          </div>
          </a>
        ))}
        </div>
      </div>
    
    );
  };
  
  export default Gallery;

//   import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './styleImageGallery.css'; // Make sure to import the CSS file
// import image1 from './streetScene.jpg'

// import image2 from './metaverseConcert.jpg'

// import image3 from './VR_Gallery__Museum__Baked.jpg'
// import image4 from './Vr_art_gallery.jpg'
// import image5 from './metaverse_art_gallery.jpg'
// import image6 from './australian_Art_gallery.jpg'

// const cardsData = [
//     {
//         title: 'Public Street',
//         text: 'A futuristic boulevard where technology and urban life converge. Every wall serves as a canvas for an array of technological marvels, playing videos that capture the essence of innovation and digital advancement.',
//         img: image1
//     },
//     {
//         title: 'Meta Wall',
//         text: 'The MetaWall is a monumental display within the metaverse, a digital canvas that stretches seemingly into infinity. It is the heart of the virtual concert experience, a dynamic wall that reacts and evolves in real-time with the performances.',
//         img: image2
//     },
//     {
//         title: 'VR Gallery  Museum  Baked',
//         text: 'Experience the city life in our modern flaThe Metaverse Art Gallery and Meeting Garden is a captivating fusion of artistic wonder and serene collaboration space, all nestled within the boundless realm of the metaverse. This unique virtual destination offers an unparalleled experience that marries the introspective beauty of art with the connective power of a communal gardent.',
//         img: image3
//     },
//     {
//         title: 'VR Art Gallery',
//         text: 'A VR Art Gallery is an immersive exhibition space that exists within the realm of virtual reality, offering an innovative platform for displaying and experiencing art. This digital gallery transcends physical limitations, allowing visitors from all corners of the globe to don a VR headset and step into a world where art takes on new dimensions.',
//         img: image4
//     },
//     {
//         title: 'Metaverse Art Gallery',
//         text: 'Experience the city life in our modern flaThe Metaverse Art Gallery and Meeting Garden is a captivating fusion of artistic wonder and serene collaboration space, all nestled within the boundless realm of the metaverse. This unique virtual destination offers an unparalleled experience that marries the introspective beauty of art with the connective power of a communal gardent.',
//         img: image5
//     },
//     {
//         title: 'Australia VR Art Gallery',
//         text: 'The Australia VR Art Gallery is a pioneering virtual reality space dedicated to celebrating and showcasing the rich tapestry of Australian art. This immersive gallery transcends geographical boundaries, allowing visitors from around the world to don VR headsets and step into a realm where the vibrant art scene of Australia comes to life.',
//         img: image6
//     },
    
//     ];

// const Gallery = () => {
//     return (
//         <div className='maincontainer'>
//           {/* Heading Section */}
//           <div className="gallery-header">
//             <h2>Infinite universes beckon your curiosity.</h2>
//           </div>
  
//           {/* Gallery Container */}
//           <div className="gallery-container">
//             {cardsData.map((card, index) => (
//               <div className="gallery-card" key={index}>
//                 <img src={card.img} alt={card.title} />
//                 <div className="card-body">
//                   <h5 className="card-title">{card.title}</h5>
//                   <p className="card-text">{card.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//   };
  
//   export default Gallery;