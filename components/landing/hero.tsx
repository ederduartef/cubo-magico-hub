"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src="/images/logo.png"
            alt="Cubo Mágico Hub"
            className="h-40 sm:h-56 w-auto mx-auto object-contain"
          />
        </motion.div>

        {/* Sub-headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F292E] leading-tight text-balance"
        >
          Mais do que um espaço, uma{" "}
          <span className="text-[#48778A]">comunidade profissional.</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed text-pretty"
        >
          Um coworking de negócios que conecta profissionais qualificados em saúde, bem-estar, estética e eventos. Com uma proposta alternativa — mais próxima, leve e personalizada — unimos conhecimento, arte e comunidade em um ambiente acolhedor, acessível e em constante movimento. Aqui, cada cuidado se transforma em uma experiência.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 md:mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-[#48778A] text-[#FDFBF7] hover:bg-[#3a6275] text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agendar meu atendimento
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
