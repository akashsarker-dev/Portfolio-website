import React, { useState } from 'react';

const Tabs = () => {
  const tabsData = ['Frontend', 'Backend', 'Others'];
  const [selectedComponent, setSelectedComponent] = useState(0);

  const handleClick = (component) => {
    setSelectedComponent(component);
  };

  const imagesData = [
    { title: 'JavaScript', url: 'https://i.ibb.co/jJmYdTx/div-h-20.png' },
    { title: 'NextJS', url: 'https://i.ibb.co/02NQsDW/div-h-20-1.png' },
    { title: 'ReactJS', url: 'https://i.ibb.co/2vLDDs2/div-h-20-2.png' },
    { title: 'Redux', url: 'https://i.ibb.co/vdRHjJq/div-h-20-3.png' },
    { title: 'Tailwind', url: 'https://i.ibb.co/XCcwVnG/div-h-20-5.png' },
    { title: 'Material UI', url: 'https://i.ibb.co/GR7b4YZ/div-h-20-6.png' },
    { title: 'Chakra UI', url: 'https://i.ibb.co/HNMQpmt/div-h-20-7.png' },
    { title: 'HTML5', url: 'https://i.ibb.co/VwwLfTX/div-h-20-8.png' },
    { title: 'CSS3', url: 'https://i.ibb.co/cYPHTz2/div-h-20-9.png' },
    { title: 'Bootstrap', url: 'https://i.ibb.co/mtHzwdY/div-h-20-10.png' },
];

const backend = [
  { title: 'express-js', url: 'https://i.ibb.co/QKMbrGg/express-js.png' },
  { title: 'firebase', url: 'https://i.ibb.co/brDx8dx/firebase.png' },
  { title: 'node-js', url: 'https://i.ibb.co/981XBGz/node-js.png' },
  { title: 'mongodb', url: 'https://i.ibb.co/hfbfJL3/mongodb.png' },
];
  return (
    <div className='max-w-container mx-auto'>
      <div className='bg-teal-100 mx-auto w-[640px] p-2 gap-2 flex justify-evenly'>
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className='bg-violet-600 text-base px-5 py-3 rounded-lg text-white'
            onClick={() => handleClick(index)}>
            {tab}
          </button>
        ))}
      </div>
      <div>
      
         {selectedComponent === 0 && (
         <div className=' flex flex-wrap w-3/4 gap-9'>
         {imagesData.map((image, index) => (
           <div key={index}>
             <img src={image.url} alt="div-h-20-1" border="0"/>
             <h3 className=' text-center text-white'>{image.title}</h3>
           </div>
         ))}
       </div>
        )}
        {selectedComponent === 1 && (
         <div className=' flex flex-wrap w-3/4 gap-9'>
         {backend.map((image, index) => (
           <div key={index}>
             <img src={image.url} alt="div-h-20-1" border="0"/>
             <h3 className=' text-center text-white'>{image.title}</h3>
           </div>
         ))}
       </div>
        )}
        {selectedComponent === 2 && <h1>aaaaaaaaaaaaaa</h1>}
       
      </div>
    </div>
  );
};

export default Tabs;
