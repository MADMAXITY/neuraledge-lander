"use client";

import Link from "next/link";
import { ArrowRight, Shield, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Pay-on-Proof",
    description: "If agreed pilot KPIs aren't met, we keep working free until they are",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Pilots in 2-3 weeks, not months. See value immediately",
  },
  {
    icon: Award,
    title: "Limited Availability",
    description: "We accept limited onboardings per month to preserve quality",
  },
];

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 border border-primary/20">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#a855f708_1px,transparent_1px),linear-gradient(to_bottom,#a855f708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Ready to Let AI Do the Robot Work?
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Get a free AI Integration Audit with workflow map and template pack.
              No obligation, just value.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Your Free Audit
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/process">See How We Build</Link>
              </Button>
            </motion.div>

            <p className="mt-8 text-sm text-muted-foreground">
              📧 Or email us directly at{" "}
              <a href="mailto:shankarj888@gmail.com" className="text-primary hover:underline">
                shankarj888@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
