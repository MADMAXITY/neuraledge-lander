"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Bot, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/5 via-transparent to-accent/5" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f710_1px,transparent_1px),linear-gradient(to_bottom,#a855f710_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Floating tech icons - decorative */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 lg:left-20"
      >
        <Cpu className="w-16 h-16 text-primary animate-[float_6s_ease-in-out_infinite]" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-40 right-10 lg:right-32"
      >
        <Zap className="w-12 h-12 text-secondary animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-32 left-20 lg:left-40"
      >
        <Bot className="w-14 h-14 text-accent animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
      </motion.div>
      
      {/* Gradient orbs - very subtle depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm px-5 py-2 text-sm font-medium text-primary mb-8 shadow-lg"
          >
            <Sparkles className="w-4 h-4 animate-[spin_3s_linear_infinite]" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Production-Ready AI Systems
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight drop-shadow-sm"
          >
            Integrated AI agents that do the{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-[gradient-shift_3s_ease-in-out_infinite] bg-[length:200%_auto]">
                robot work
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 blur-sm"></span>
            </span>
            <br />
            so your team can do the{" "}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent to-primary animate-[gradient-shift_4s_ease-in-out_infinite] bg-[length:200%_auto]">
                human work
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-secondary/50 via-accent/50 to-primary/50 blur-sm"></span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-xl leading-relaxed text-foreground/80 max-w-2xl mx-auto font-medium"
          >
            We build production-ready AI automation systems that eliminate repetitive ops,
            shorten time-to-value, and help you scale with fewer people doing more meaningful work.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-4 flex-wrap"
          >
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Get Your Free AI Integration Audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">See Our Work</Link>
            </Button>
          </motion.div>

          {/* Stats - with cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex items-center justify-center gap-4 lg:gap-6 flex-wrap max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground/90">50+ Workflows Deployed</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-secondary to-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground/90">3 Industry Verticals</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground/90">Pay-on-Proof Model</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
