import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContentWrapper from "./ContentWrapper";
import reactSvg from "/public/react.svg";
import sampleSvg from "/public/sample.svg";

const Technology = ({ data }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    setActiveTab("All");

    const mergedItems = Object.values(data).flat();
    setAllItems(mergedItems);
  }, [data]);

  const handleClick = (tab) => {
    setActiveTab(tab);
    if (tab === "All") {
      const mergedItems = Object.values(data).flat();
      setAllItems(mergedItems);
    } else {
      setAllItems(data[tab]);
    }
  };

  return (
    <ContentWrapper>
      <div className="flex justify-between items-center py-6">
        <div className="">
          <Image src={reactSvg} alt="React Icon" />
        </div>
        <div className="text-center w-1/2">
          <h5 className="text-[#88B520] font-bold">TAILORED CLASSES</h5>
          <h1 className="lg:font-bold sm:font-semibold lg:text-4xl sm:text-lg md:text-lg">
            Unique Approaches To Teaching Combined Technology & Learning.
          </h1>
        </div>
        <div className="">
          <Image src={sampleSvg} alt="React Icon" />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:flex-nowrap sm:grid sm:grid-cols-4">
          {Object.keys(data).map((tab) => (
            <motion.button
              key={tab}
              className={`px-4 py-2 rounded-md border border-customPurple border-dashed focus:outline-none hover:bg-customPurple ${
                activeTab === tab
                  ? "bg-customPurple text-white"
                  : "bg-white text-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(tab)}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
  {allItems.map((item) => (
    <div key={item.id} className="bg-gray-100 p-4 rounded-md mb-2">
      <div className="relative overflow-hidden">
        <motion.div whileHover={{ scale: 1.2 }}>
          <Image
            src={item.src}
            alt={item.title}
            className="w-full h-auto mb-2 rounded-md"
          />
        </motion.div>
      </div>
      <p className="text-gray-600 text-sm mb-1">{item.tag}</p>
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-sm text-gray-700 mb-2">{item.des}</p>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-bold">{item.price}</p>
        <div className="flex items-center space-x-1">
          {[...Array(item.rating)].map((_, index) => (
            <span key={index} className="text-yellow-500">
              ★
            </span>
          ))}
          {item.rating}
        </div>
      </div>
      <button className="px-4 py-2 bg-customPurple text-white rounded-md hover:bg-blue-600 focus:outline-none">
        JOIN CLASS
      </button>
    </div>
  ))}
</div>

      </div>
    </ContentWrapper>
  );
};

export default Technology;
