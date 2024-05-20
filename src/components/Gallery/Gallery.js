import React from "react";
import GalleryData from "../../Data/GalleryData";
import Cards from "./Cards";
import { CCard } from "@coreui/react";

export default function Gallery() {
  function nCards(val) {
    return (
      <Cards
        src={val.src}
        name={val.name}
        alt={val.alt}
        heading={val.heading}
      />
    );
  }
  return (
    <>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="w-full text-center items-center justify-center">
            <h2 className="mx-5 text-2xl text-gray-900 font-bold md:text-4xl">
              HELLO! WELCOME TO SUNZINE PHOTO GALLERY WITH CREATIVE & UNIQUE
              STYLE
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
          </div>
        </div>

        {/* gallery */}
       
        <div className="">
          <CCard className="md:5/12 lg:w-11/12 bg-cover m-2">
            <div className=" flex flex-wrap justify-center space-x-6 space-y-5 item-center">
              {GalleryData.map(nCards)}
            </div>
          </CCard>
        </div>
        
      </div>
    </>
  );
}