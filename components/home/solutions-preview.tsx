"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Building2, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: MessageSquare,
    title: "Social Media & Content",
    description: "Platform-native content automation and conversation systems that turn attention into DMs without burning out your team.",
    problems: ["Content fatigue", "Algorithm chasing", "Low engagement"],
    href: "/solutions/smmc",
    color: "text-blue-500",
  },
  {
    icon: Building2,
    title: "High-Ticket SaaS",
    description: "Custom AI integrations across GTM, RevOps, and Product that accelerate deals, prove value faster, and reduce sales effort.",
    problems: ["Slow sales cycles", "Broken onboarding", "High churn"],
    href: "/solutions/saas",
    color: "text-purple-500",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "AI-assisted speed-to-lead, deal rooms, and demand efficiency so agents connect faster, close cleaner, and spend less.",
    problems: ["Slow lead response", "Info sprawl", "High marketing costs"],
    href: "/solutions/real-estate",
    color: "text-cyan-500",
  },
];

export function SolutionsPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Industry-Specific AI Solutions
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed">
            We build production-ready automation systems tailored to your industry's unique challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <solution.icon className={`w-6 h-6 ${solution.color}`} />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Problems we solve:</p>
                    <ul className="space-y-1">
                      {solution.problems.map((problem) => (
                        <li key={problem} className="text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild variant="ghost" className="w-full group/btn">
                    <Link href={solution.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
