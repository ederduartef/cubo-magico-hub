"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export function B2BSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#EAF1F4]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#48778A]/10 mb-6">
            <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#48778A]" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F292E] tracking-wide">
            SOLUCOES PARA EMPRESAS
          </h2>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1F292E] mb-4"
        >
          Cuide das pessoas que fazem sua empresa acontecer.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Criamos experiencias personalizadas de bem-estar, saude mental e autocuidado para equipes. Realizamos atendimentos e eventos no nosso espaco ou na sua empresa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-[#48778A] text-[#FDFBF7] hover:bg-[#3a6275] px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Solicitar proposta para empresas
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
