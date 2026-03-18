"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    text: "A psicoterapia foi um divisor de águas. Aprendi a me conhecer melhor, a aceitar minhas imperfeições e a me perdoar.",
    initials: "M.S.",
  },
  {
    text: "Estou mais consciente de mim mesmo e das minhas necessidades. A terapia me permitiu melhorar meus relacionamentos e minha qualidade de vida.",
    initials: "R.A.",
  },
  {
    text: "Meu filho estava tendo dificuldades para lidar com a ansiedade, e a terapia o ajudou a desenvolver ferramentas para controlar seus medos.",
    initials: "C.L.",
  },
  {
    text: "A terapia me ajudou a enxergar as situações de forma mais positiva e a encontrar soluções para os meus problemas em um momento muito difícil.",
    initials: "P.F.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#EAF1F4] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F292E] tracking-wide">
            O QUE DIZEM SOBRE NÓS
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2">
                  <Card className="h-full border-0 shadow-md bg-white">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        {/* Avatar Placeholder */}
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#48778A]/10 flex items-center justify-center shrink-0">
                          <span className="text-sm sm:text-base font-bold text-[#48778A]">
                            {testimonial.initials}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <Quote className="w-5 h-5 text-[#EAB64D] mb-2" />
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {testimonial.text}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 border-[#48778A] text-[#48778A] hover:bg-[#48778A] hover:text-[#FDFBF7]" />
              <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 border-[#48778A] text-[#48778A] hover:bg-[#48778A] hover:text-[#FDFBF7]" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
