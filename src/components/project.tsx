import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
interface projectProps {
  name: string;
  stack: string[];
  images: string[];
}
const Project: React.FC<projectProps> = (props) => {
  return (
    <div className="w-full">
      <h4>{props.name}</h4>
      <div>
        <Swiper>
          {props.images.map((value, index) => (
            <SwiperSlide key={index}>
              <div>
                <img src={value} alt={props.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
