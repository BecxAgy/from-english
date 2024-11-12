"use client";
import React from "react";
import CardTestemonials from "../CardTestemonials";
import { testimonialsData } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const TestimonialsSection = () => {
  return (
    <section id="about-us" className="py-24 gap-10">
      <div className="space-y-6 flex flex-col justify-center">
        <span className="text-sm font-bold text-blue-dark uppercase">
          Testemunhas
        </span>

        <h2 className="md:text-5xl text-4xl font-bold text-blue-dark-2">
          O que nossos alunos falam?
        </h2>
        <div className="w-full py-10">
          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              // Ajustes para diferentes tamanhos de tela
              640: { slidesPerView: 1 },
              820: { slidesPerView: 2 },
              1270: { slidesPerView: 3 },
            }}
            className=""
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index} className="py-10">
                <CardTestemonials
                  variant={testimonial.variant}
                  img={testimonial.img}
                  name={testimonial.name}
                  role={testimonial.role}
                  avaliation={testimonial.avaliation}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
