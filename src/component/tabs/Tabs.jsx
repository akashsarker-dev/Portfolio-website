// import React, { useState } from "react";

// const Tabs = () => {
//   const tabsData = ["Frontend", "Backend", "Others"];
//   const [selectedComponent, setSelectedComponent] = useState(0);

//   const handleClick = (component) => {
//     setSelectedComponent(component);
//   };

//   const imagesData = [
//     { title: "JavaScript", url: "https://i.ibb.co/jJmYdTx/div-h-20.png" },
//     { title: "NextJS", url: "https://i.ibb.co/Kr9W1LG/next-js.png" },
//     { title: "ReactJS", url: "https://i.ibb.co/2vLDDs2/div-h-20-2.png" },
//     { title: "Redux", url: "https://i.ibb.co/vdRHjJq/div-h-20-3.png" },
//     { title: "Tailwind", url: "https://i.ibb.co/XCcwVnG/div-h-20-5.png" },
//     { title: "Material UI", url: "https://i.ibb.co/GR7b4YZ/div-h-20-6.png" },
//     { title: "Chakra UI", url: "https://i.ibb.co/HNMQpmt/div-h-20-7.png" },
//     { title: "HTML5", url: "https://i.ibb.co/VwwLfTX/div-h-20-8.png" },
//     { title: "CSS3", url: "https://i.ibb.co/cYPHTz2/div-h-20-9.png" },
//     { title: "Bootstrap", url: "https://i.ibb.co/mtHzwdY/div-h-20-10.png" },
//   ];

//   const backend = [
//     { title: "express-js", url: "https://i.ibb.co/9v9vYwZ/express-js.png" },
//     { title: "firebase", url: "https://i.ibb.co/XyYw5GJ/firebase.png" },
//     { title: "node-js", url: "https://i.ibb.co/L5pfVQK/node-js.png" },
//     { title: "mongodb", url: "https://i.ibb.co/VCdPbQ4/mongodb.png" },
//   ];

//   const other = [
//     { title: "React-native", url: "https://i.ibb.co/nmKckMf/React-native.png" },
//     { title: "Github", url: "https://i.ibb.co/g7H6w7B/github.png" },
//     { title: "Git", url: "https://i.ibb.co/2P98Csp/Git.png" },
//     { title: "Googling", url: "https://i.ibb.co/sPfT6j4/google.png" },
//   ];

//   return (
//     <div className="max-w-container mx-auto">
//       <div className="bg-teal-100 mx-auto w-[640px] p-2 gap-2 flex justify-evenly">
//         {tabsData.map((tab, index) => (
//           <button
//             key={index}
//             className="bg-violet-600 text-base px-5 py-3 rounded-lg text-white"
//             onClick={() => handleClick(index)} >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <div>
//         <div className="bg-[#112E42] px-5 mx-auto gap-4 py-9 rounded-2xl border-primary-color border-2">
//           {selectedComponent === 0 && (
//             <div className=" flex flex-wrap w-3/4 gap-9">
//               {imagesData.map((image, index) => (
//                 <div className="w-[140px] h-[170px] p-4  mx-auto border-2 border-primary-color bg-transparent rounded-xl"
//                   key={index}>
//                   <img className="mx-auto" src={image.url} border="0" />
//                   <p className="text-base mt-4 font-bold text-center text-[#EDEDED]">
//                     {image.title}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//           {selectedComponent === 1 && (
//             <div className=" flex flex-wrap w-3/4 gap-9">
//               {backend.map((image, index) => (
//                 <div
//                   className="w-[140px] h-[170px] p-4  mx-auto border-2 border-primary-color bg-transparent rounded-xl"
//                   key={index}
//                 >
//                   <img className="mx-auto" src={image.url} border="0" />
//                   <p className="text-base mt-4 font-bold text-center text-[#EDEDED]">
//                     {image.title}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//           {selectedComponent === 2 && (
//             <div className=" flex flex-wrap w-3/4 gap-9 mx-auto">
//               {other.map((image, index) => (
//                 <div
//                   className="w-[140px] h-[170px] p-4  mx-auto border-2 border-primary-color bg-transparent rounded-xl"
//                   key={index}
//                 >
//                   <img className="mx-auto" src={image.url} border="0" />
//                   <p className="text-base mt-4 font-bold text-center text-[#EDEDED]">
//                     {image.title}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tabs;
