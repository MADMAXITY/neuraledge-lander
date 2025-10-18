"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tools = [
  { name: "OpenAI", logo: "/images/tools/openai.png" },
  { name: "Claude AI", logo: "/images/tools/claude-ai.png" },
  { name: "n8n", logo: "/images/tools/n8n-color.png" },
  { name: "Make", logo: "/images/tools/make-color.png" },
  { name: "Zapier", logo: "/images/tools/zapier-logo.png" },
  { name: "Supabase", logo: "/images/tools/supabase-logo-png_seeklogo-435677.png" },
];

export function TrustBar() {
  return (
    <section className="py-16 border-y border-border/50 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Powered by industry-leading AI & automation platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-32 h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
