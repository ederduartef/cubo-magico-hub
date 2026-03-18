"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const professionals = [
  {
    name: "Kenia Maia",
    role: "Psicologa, Responsavel Tecnica e Cofundadora",
    quote: "Acredito que o momento de angustia pode ser o ponto de partida para a sua maior transformacao.",
    image: "/images/kenia.jpg",
  },
  {
    name: "Isaac Martins",
    role: "Psicologo, Presidente e Fundador do Cubo Magico",
    quote: "Meu objetivo e proporcionar uma experiencia positiva e descontraida, sem deixar a seriedade de lado. Cada ser e unico.",
    image: "/images/isaac.jpg",
  },
  {
    name: "Tatiane Soares",
    role: "Psicologa e Supervisora Clinica CRP: 04/61014",
    quote: "Foco no desenvolvimento da empatia, dialogo e na disposicao para mudancas profundas.",
    image: "/images/tatiane.jpg",
  },
];

export function Professionals() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F292E] tracking-wide">
            NOSSOS PROFISSIONAIS
          </h2>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-10 md:mb-12"
        >
          <div className="bg-[#48778A]/10 text-[#48778A] border border-[#48778A]/20 rounded-xl px-4 py-3 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left mx-4">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <span className="text-xs sm:text-sm leading-relaxed">
              Todos os profissionais possuem formacao em Psicologia com CRP ativo.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {professionals.map((professional, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-0 shadow-md bg-white">
                    <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center">
                      {/* Avatar Placeholder */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#EAF1F4] mb-5 overflow-hidden">
                        <img
                          src={professional.image}
                          alt={professional.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-[#1F292E] mb-1">
                        {professional.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#48778A] font-medium mb-4">
                        {professional.role}
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed italic">
                        &ldquo;{professional.quote}&rdquo;
                      </p>
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
