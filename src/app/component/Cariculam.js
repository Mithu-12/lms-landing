import { motion } from "framer-motion";
import Image from "next/image";
import ContentWrapper from "./ContentWrapper";
import bolbImage from "/public/blob-img.webp";
import Button from "./Button";

export default function Cariculam() {
  const hoverVariants = {
    hover: {
      scale: 1.1, // Example: Scale up slightly on hover
      transition: { duration: 0.3, ease: "ease-in-out" },
    },
  };
  const borderAnimation = {
    hover: {
      borderColor: "#000000",
      borderStyle: "dashed",
      borderWidth: 2,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <ContentWrapper>
  <div className="flex justify-between items-start py-12 lg:gap-10">
    <div className="w-1/2 relative hidden sm:hidden md:hidden lg:block">
      <div
        className="sub-bg bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(/gradient-blob.webp)`,
          height: "465px",
          width: "505px",
        }}
      >
        <motion.div
          className="image-container"
          style={{
            position: "absolute",
            top: "22px",
            left: "28px",
            zIndex: 1,
          }}
          whileHover="hover"
          variants={hoverVariants}
        >
          <Image
            src={bolbImage}
            alt="Blob Image"
            width={440}
            height={480}
            layout="fixed"
          />
        </motion.div>
      </div>
    </div>

    <div>
      <div>
        <h4 className="text-lg font-semibold">UNLIMITED LEARNING</h4>
        <h1 className="text-4xl font-bold">Cross Disciplinary Curriculum</h1>
        <p>
          Quisque egestas diam in arcu cursus. Amet cursus sit amet dictum
          sit.sodales felis, ultricies ultricies metus faucibus non. Integer
          consequat ex lacus, in mattis nulla posuere
        </p>
      </div>
      <div>
        <div className="flex gap-6">
          <div className="py-5 px-7 bg-[#CB98E8] rounded-md border border-dashed border-[#000] border-2">
            <p>01</p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Fun Filled Learning</h2>
            <p>Arcu non odio euismod lacinia at quis risus. Fusce ut placerat orci.</p>
          </div>
        </div>
        <div className="flex gap-6 py-4">
          <div className="py-5 px-7 bg-[#F96EA0] rounded-md border border-dashed border-[#000] border-2">
            <p>01</p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Secured Atmosphere</h2>
            <p>Augue ut lectus arcu bibendum at varius vel pharetra vel ultrices dui.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="py-5 px-7 bg-[#7BBFFF] rounded-md border border-dashed border-[#000] border-2">
            <p>01</p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Furnished Classrooms</h2>
            <p>Diam volutpat commodo sed egestas egestas fringilla imperdiet.</p>
          </div>
        </div>
        <div className="py-4">
          <Button radius={"lg"} text={"MORE ABOUT US"} />
        </div>
      </div>
    </div>
  </div>
</ContentWrapper>

  );
}

