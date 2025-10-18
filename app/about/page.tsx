import Link from "next/link";
import Image from "next/image";
import { Target, Shield, Zap, Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | NeuralEdge",
  description: "Learn about NeuralEdge's mission to build production-ready AI automation systems. Meet our team of AI and Web3 engineers.",
};

const pillars = [
  {
    icon: Shield,
    title: "Safety & Guardrails",
    description: "Human-in-the-loop controls, audit trails, and explainability built into every system",
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "Works with your existing tools: Zoho, Salesforce, Gmail, Telegram, Discord, and more",
  },
  {
    icon: Target,
    title: "Measurable Outcomes",
    description: "Every pilot has clear KPIs. We don't get paid until you see results",
  },
  {
    icon: Award,
    title: "Production-Ready",
    description: "Not POCs or prototypes. Systems that scale with monitoring, retries, and alerting",
  },
];

const team = [
  {
    name: "Shankar",
    role: "Full-Stack AI/Web3 Engineer",
    description: "Ex-Amazon SDE (Finance Automation). Builds production AI agents and automation systems end-to-end.",
    portfolio: "https://shankar-ne.live/",
    available: true,
  },
  {
    name: "Shivam",
    role: "Developer",
    description: "Specialized in backend systems and integrations. Portfolio coming soon.",
    portfolio: null,
    available: false,
  },
  {
    name: "Deep",
    role: "Developer",
    description: "Focused on frontend and user experience. Portfolio coming soon.",
    portfolio: null,
    available: false,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            We Build AI Systems That Actually Work
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            No fluff. No hype. Just production-ready AI automation systems that eliminate repetitive ops
            and let your team focus on what matters.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We integrate AI agents into your workflows—safely and seamlessly—so leaders can eliminate
              repetitive ops, shorten time-to-value, and scale with fewer people doing more meaningful work.
            </p>
          </div>
        </div>

        {/* Our Approach - 4 Pillars */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{pillar.title}</CardTitle>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Philosophy */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6">Our Technology Philosophy</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              <span className="text-foreground font-semibold">"We don't chase hype. We deploy systems that work."</span>
            </p>
            <p>
              Our stack is built for production: LLM operations with OpenAI/Claude/Gemini, orchestration via n8n/Make,
              data layers with Postgres/Supabase, and integrations across your existing tools.
            </p>
            <p>
              We focus on deterministic systems where possible, add human-in-the-loop guardrails where needed,
              and maintain audit trails for everything.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {["OpenAI", "Claude AI", "n8n", "Make", "Zapier", "Supabase"].map((tool, index) => (
              <div key={tool} className="flex items-center justify-center">
                <div className="relative w-24 h-16 opacity-60 hover:opacity-100 transition-opacity">
                  <Image
                    src={`/images/tools/${
                      tool === "OpenAI" ? "openai.png" :
                      tool === "Claude AI" ? "claude-ai.png" :
                      tool === "n8n" ? "n8n-color.png" :
                      tool === "Make" ? "make-color.png" :
                      tool === "Zapier" ? "zapier-logo.png" :
                      "supabase-logo-png_seeklogo-435677.png"
                    }`}
                    alt={tool}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why We're Different */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6">Why We're Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">End-to-End Capability</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Design → Data → Infrastructure → Backend → Frontend. We handle the full stack.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Premium UX Focus</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Clean interfaces, clear feedback, and measurable outcomes. No technical debt.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Production Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Systems built from Amazon-scale automation expertise. Ready for real workloads.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dev Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Development Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 text-2xl font-bold text-primary">
                    {member.name[0]}
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                  {member.available && member.portfolio ? (
                    <Button asChild variant="ghost" size="sm" className="w-full">
                      <Link href={member.portfolio} target="_blank" rel="noopener noreferrer">
                        View Portfolio
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground italic">Portfolio coming soon</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-8">
            Get your free AI Integration Audit and see how we can help.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
