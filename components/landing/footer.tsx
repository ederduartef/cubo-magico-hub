"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Facebook, Linkedin, Youtube, MapPin, Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 md:py-20 px-4 sm:px-6 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F292E] mb-3">
            Atendimentos presenciais e on-line
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mb-10">
            Flexibilidade para cuidar de você de onde estiver.
          </p>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(37, 211, 102, 0)",
                "0 0 0 8px rgba(37, 211, 102, 0.2)",
                "0 0 0 0 rgba(37, 211, 102, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block rounded-xl"
          >
            <Button
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#20bd5a] px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </Button>
          </motion.div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 text-left"
        >
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm">
            <MapPin className="w-5 h-5 text-[#48778A] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-[#1F292E] mb-1">Endereço</p>
              <p className="text-xs text-slate-500">Rua Exemplo, 123 - Centro, Cidade - UF</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm">
            <Clock className="w-5 h-5 text-[#48778A] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-[#1F292E] mb-1">Horário</p>
              <p className="text-xs text-slate-500">Seg - Sex: 8h às 20h</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm">
            <Phone className="w-5 h-5 text-[#48778A] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-[#1F292E] mb-1">Telefone</p>
              <p className="text-xs text-slate-500">(00) 0 0000-0000</p>
            </div>
          </div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mb-8"
        >
          {[
            { icon: Instagram, label: "Instagram" },
            { icon: Facebook, label: "Facebook" },
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Youtube, label: "YouTube" },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-[#EAF1F4] flex items-center justify-center text-[#48778A] hover:bg-[#48778A] hover:text-[#FDFBF7] transition-colors duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xs text-slate-400"
        >
          © {new Date().getFullYear()} Cubo Mágico Hub. Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  );
}
