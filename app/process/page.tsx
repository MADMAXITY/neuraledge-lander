import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | NeuralEdge",
  description: "How we build production-ready AI automation systems. Our 5-phase process from discovery to evolution.",
};

const phases = [
  {
    number: 1,
    title: "Discovery & Audit",
    description: "Free AI Integration Audit, workflow mapping, and KPI definition.",
    duration: "1-2 days",
  },
  {
    number: 2,
    title: "Blueprint",
    description: "Architecture design, prompt libraries, and integration planning.",
    duration: "3-5 days",
  },
  {
    number: 3,
    title: "Pilot",
    description: "MVP in 2-3 weeks with human-in-the-loop testing and iteration.",
    duration: "2-3 weeks",
  },
  {
    number: 4,
    title: "Production",
    description: "Guardrails, monitoring, handoff, and comprehensive documentation.",
    duration: "1 week",
  },
  {
    number: 5,
    title: "Evolution",
    description: "Ongoing optimization, reporting, and expansion based on learnings.",
    duration: "Continuous",
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            How We Build
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven 5-phase process takes you from discovery to production-ready AI systems.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <Card key={phase.number} className="relative overflow-hidden">
              {/* Progress line */}
              {index < phases.length - 1 && (
                <div className="absolute left-[49px] top-[80px] w-0.5 h-full bg-border z-0" />
              )}
              <CardHeader className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {phase.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl">{phase.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">{phase.duration}</span>
                    </div>
                    <CardDescription className="text-base">{phase.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-8">
            Get your free AI Integration Audit and kick off Phase 1 today.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Your Free Audit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
