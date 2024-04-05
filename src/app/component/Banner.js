// import Image from "next/image";
// import ContentWrapper from "./ContentWrapper";
// import femaleStd from "/public/girl.webp";
// import Button from "./Button";

// export const Banner = () => {
//   return (
//     <div
//       className="pt-12 "
//       style={{
//         paddingTop: "1.2rem",
//         background:
//           "linear-gradient(to right, rgb(194, 237, 255), rgb(197, 210, 255), rgb(228, 185, 255))",
//           height: '600px'
//        }}
//     >
//       <div
//         className=" main-bg bg-cover bg-no-repeat bg-center h-screen w-full "
//         style={{
//           backgroundImage: `url(/banner-background.png)`,
//           backgroundPosition: "center top -80px",
//         }}
//       >
//         <ContentWrapper>
//           <div className="flex justify-between items-center ">
//             <div
//               className="w-1/2 flex flex-col justify-center  gap-2 h-full relative"
//               style={{ top: "90px" }}
//             >
//               <h5 className="text-[#9739EA] text-lg font-bold">
//                 EXCELLENT SCHOOLING
//               </h5>
//               <h1 className="text-6xl font-bold py-3">
//                 Dedicated To Primary Education.
//               </h1>
//               <p>
//                 Urna duis convallis convallis tellus id interdum velit laoreet
//                 id. Sollicitudin nibh sit amet commodo nulla. Amet venenatis
//                 urna cursus eget nunc. Aliquam faucibus purus in massa tempor
//                 nec feugiat. Pharetra vel turpis nunc eget.
//               </p>
//               <div className="border-dotted border">
//                 <input type="text"  className="py-2 px-5"/>
//                 <Button  size="md" radius="full" text="Click me" />

//               </div>
//             </div>
//             <div>
//               <div
//                 className="sub-bg bg-cover bg-no-repeat bg-center h-96 w-96 text-white"
//                 style={{ backgroundImage: `url(/circel.webp)` }}
//               ></div>
//               <Image
//                 src={femaleStd}
//                 alt="Female Standard (Static Image)"
//                 layout="fixed"
//                 width={385}
//                 height={228}
//                 className="static-image absolute top-6 left-2/2 -translate-x-2/2"
//               />
//             </div>
//           </div>
//         </ContentWrapper>
//       </div>
//     </div>
//   );
// };


import Image from "next/image";
import ContentWrapper from "./ContentWrapper";
import femaleStd from "/public/girl.webp";
import Button from "./Button";

export const Banner = () => {
  return (
    <div
      className="pt-12 "
      style={{
        paddingTop: "1.2rem",
        background:
          "linear-gradient(to right, rgb(194, 237, 255), rgb(197, 210, 255), rgb(228, 185, 255))",
        height: "600px", // Keeping fixed height for desktop view
      }}
    >
      <div
        className="main-bg bg-cover bg-no-repeat bg-center h-screen w-full "
        style={{
          backgroundImage: `url(/banner-background.png)`,
          backgroundPosition: "center top -70px",
        }}
      >
        <ContentWrapper>
          <div className="flex flex-col lg:flex-row justify-between items-center ">
            {/* Left Section */}
            <div className="lg:w-1/2 flex flex-col justify-center gap-2 h-full relative">
              <h5 className="text-[#9739EA] text-lg font-bold">
                EXCELLENT SCHOOLING
              </h5>
              <h1 className="text-6xl font-bold py-3">
                Dedicated To Primary Education.
              </h1>
              <p>
                Urna duis convallis convallis tellus id interdum velit laoreet
                id. Sollicitudin nibh sit amet commodo nulla. Amet venenatis
                urna cursus eget nunc. Aliquam faucibus purus in massa tempor
                nec feugiat. Pharetra vel turpis nunc eget.
              </p>
              <div className="border-dotted border">
                <input type="text" className="py-2 px-5" />
                <Button size="md" radius="full" text="Click me" />
              </div>
            </div>
            {/* Right Section (Hidden on Mobile and Tablet) */}
            <div className="hidden lg:block lg:pl-12 lg:w-1/2">
              <div
                className="sub-bg bg-cover bg-no-repeat bg-center h-96 lg:h-auto w-full"
                style={{ backgroundImage: `url(/circel.webp)` }}
              ></div>
              <Image
                src={femaleStd}
                alt="Female Standard (Static Image)"
                layout="fixed"
                width={385}
                height={238}
                className="static-image absolute top-6 bottom-0 left-2/2 -translate-x-2/2 lg:static lg:relative lg:top-auto lg:left-auto lg:-translate-x-0"
              />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

