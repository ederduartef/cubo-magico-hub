"use client";

import { useEffect, useState, useCallback } from "react";
// Carousel with native autoplay implementation
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Psicoterapia (criancas, adolescentes e adultos)",
    description: "Atendimentos com profissionais preparados em diversas abordagens, focados em autoconhecimento, saude emocional e qualidade de vida.",
  },
  {
    title: "Avaliacao neuropsicologica",
    description: "Investigacao das funcoes cognitivas, auxiliando na identificacao de condicoes como autismo, TDAH e dificuldades de aprendizagem.",
  },
  {
    title: "Bronzeamento natural",
    description: "Experiencia de autocuidado com horario personalizado, em um ambiente relaxante com acesso a piscina.",
  },
  {
    title: "Barbearia",
    description: "Corte e barba com atendimento personalizado, com possibilidade de incluir visagismo e ozonioterapia de forma opcional.",
  },
  {
    title: "Podologia",
    description: "Cuidados especializados com os pes, tratando unhas encravadas, calosidades, rachaduras e micoses, alem de manutencao preventiva.",
  },
  {
    title: "Massagem terapeutica",
    description: "Tecnicas corporais que aliviam tensoes, dores e promovem relaxamento fisico e mental.",
  },
];

export function ServicesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api || isHovered) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api, isHovered, scrollNext]);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F292E] tracking-wide">
            SERVICOS EM DESTAQUE
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-0 shadow-md bg-white flex flex-col">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-base sm:text-lg font-bold text-[#1F292E] leading-snug">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between px-4 sm:px-6 pb-4 sm:pb-6">
                      <CardDescription className="text-sm text-slate-500 leading-relaxed mb-4 sm:mb-6">
                        {service.description}
                      </CardDescription>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="w-full border-[#48778A] text-[#48778A] hover:bg-[#48778A] hover:text-[#FDFBF7] transition-colors"
                      >
                        Agendar
                      </Button>
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
