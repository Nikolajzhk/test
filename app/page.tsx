import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { CheckCircle, Code, MonitorSmartphone, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="max-w-5xl mx-auto py-20 px-6 text-center">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Professionelle Landing Pages der Konverterer
        </motion.h1>
        <motion.p 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
        >
          Jeg designer og udvikler skræddersyede landing pages med ét formål: at omdanne besøgende til betalende kunder.
        </motion.p>
        <motion.a 
          href="#kontakt"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
        >
          <Button className="text-lg px-6 py-3 rounded-2xl shadow-md">
            Book en Gratis Samtale
          </Button>
        </motion.a>
      </section>
      {/* Additional sections are here */}
      <footer className="py-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Din Navn. Udviklet med passion og fokus på resultater.
      </footer>
    </main>
  );
}