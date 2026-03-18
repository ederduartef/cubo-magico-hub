"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tabsData = {
  "saude-mental": {
    label: "SAUDE MENTAL & DESENVOLVIMENTO",
    shortLabel: "Saude Mental",
    services: [
      { title: "Psicoterapia para casais e familia", description: "Espaco de escuta e mediacao para fortalecer vinculos e melhorar a comunicacao." },
      { title: "Avaliacao psicologica", description: "Processo estruturado com testes e entrevistas, indicado para bariatrica, processos judiciais, concursos e RH." },
      { title: "Psicopedagogia", description: "Acompanhamento pedagogico para desenvolvimento escolar e superacao de dificuldades de aprendizagem." },
      { title: "Psiquiatria", description: "Atendimento medico em saude mental com abordagem humanizada e cuidado individualizado." },
    ],
  },
  "corpo-regulacao": {
    label: "CORPO & REGULACAO",
    shortLabel: "Corpo",
    services: [
      { title: "Quiropraxia", description: "Alinhamento corporal, melhora da postura e alivio de dores." },
      { title: "Ventosaterapia", description: "Melhora a circulacao e promove relaxamento muscular." },
      { title: "Massoterapia", description: "Massagens voltadas para relaxamento e reducao do estresse." },
    ],
  },
  "autocuidado-estetica": {
    label: "AUTOCUIDADO & ESTETICA",
    shortLabel: "Estetica",
    services: [
      { title: "Limpeza de pele", description: "Tratamentos para saude, renovacao e equilibrio da pele." },
      { title: "Consultoria skincare", description: "Rotina personalizada para sua pele com orientacao pratica." },
    ],
  },
  "cuidado-integrativo": {
    label: "CUIDADO INTEGRATIVO",
    shortLabel: "Integrativo",
    services: [
      { title: "Acupuntura sistemica", description: "Equilibrio do corpo e mente atraves da medicina chinesa." },
      { title: "Auriculoterapia", description: "Estimulacao de pontos na orelha para equilibrio fisico e emocional." },
      { title: "Terapia Reiki", description: "Promove relaxamento e equilibrio energetico." },
      { title: "Terapia floral", description: "Auxilia no equilibrio emocional." },
      { title: "Leitura de aura", description: "Ferramenta de autoconhecimento." },
    ],
  },
  "outros-servicos": {
    label: "OUTROS SERVICOS",
    shortLabel: "Outros",
    services: [
      { title: "Atendimento juridico", description: "Orientacao e suporte em demandas legais." },
      { title: "Palestras e eventos", description: "Conteudos para empresas e grupos." },
    ],
  },
};

export function CareTabs() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F292E] tracking-wide">
            CUIDADO SEGMENTADO
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Encontre o servico ideal para suas necessidades
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs defaultValue="saude-mental" className="w-full">
            <TabsList className="w-full h-auto flex flex-wrap justify-center gap-1 sm:gap-2 bg-transparent p-0 mb-8">
              {Object.entries(tabsData).map(([key, { shortLabel }]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-500 rounded-lg border border-transparent data-[state=active]:border-[#EAB64D] data-[state=active]:text-[#1F292E] data-[state=active]:bg-white data-[state=active]:shadow-sm hover:text-[#1F292E] transition-all"
                >
                  {shortLabel}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(tabsData).map(([key, { services }]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full border-0 shadow-md bg-white">
                        <CardHeader className="p-4 sm:p-5">
                          <CardTitle className="text-sm sm:text-base font-semibold text-[#1F292E]">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                          <CardDescription className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Global Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-[#48778A] text-[#48778A] hover:bg-[#48778A] hover:text-[#FDFBF7] px-8 py-6 text-sm sm:text-base rounded-xl transition-all duration-300"
            >
              Falar com a nossa equipe
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
