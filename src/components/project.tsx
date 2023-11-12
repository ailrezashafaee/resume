import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineProject } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsStack } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import { ModalPortal } from "../view/modal";
import Modal from "./modal";
interface projectProps {
  name: string;
  stack: string[];
  images: string[];
}
const Project: React.FC<projectProps> = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="w-full rounded-3xl bg-light_card py-10 pb-5 pt-4 cursor-default px-10 m-auto">
      <h4 className="text-primary space-x-1.5 flex pl-5 items-center text-left font-bold self-start w-full py-4 text-3xl">
        <AiOutlineProject />
        <span className="text-2xl">{props.name}</span>
      </h4>
      <div className="flex items-center justify-start pl-5 space-x-2 mb-5 text-xl">
        <BsStack />
        <div className="flex items-center space-x-4 flex-wrap">
          {props.stack.map((value, index) => (
            <span className="font-medium text-lg" key={index}>
              {value} {index + 1 !== props.stack.length ? "," : ""}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Pagination]}
          slidesPerView={2}
          spaceBetween={30}
          pagination
       >
          {props.images.map((value, index) => (
            <SwiperSlide key={index}>
              <div className="h-[400px] mb-16 overflow-hidden relative rounded-2xl w-full ">
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-light_card cursor-pointer hover:opacity-10 tansition opacity-30">
                </div>
                <img
                  src={value}
                  alt={props.name}
                  className="w-full object-cover h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
                />
                {modal &&
                  <Modal image={value} />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
