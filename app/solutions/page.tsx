import Link from "next/link";
import { ArrowRight, MessageSquare, Building2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | NeuralEdge",
  description: "Industry-specific AI automation solutions for Social Media & Content, High-Ticket SaaS, and Real Estate.",
};

const solutions = [
  {
    icon: MessageSquare,
    title: "Social Media & Content Creation",
    slug: "smmc",
    description: "Platform-native content and conversation systems that turn attention into DMs—without burning out your team.",
    problems: [
      "Content fatigue and burnout",
      "Algorithm chasing kills creativity",
      "Low engagement to DM conversion",
      "Lack of authenticity at scale",
    ],
    solutions: [
      "Platform-Native Short-Form Video Engine",
      "Authenticity Engine with Brand Voice Library",
      "Conversation Desk for DM/Comment Management",
    ],
    kpis: ["Hook retention at 3s/8s", "Views to DM rate", "Comment sentiment"],
  },
  {
    icon: Building2,
    title: "High-Ticket SaaS",
    slug: "saas",
    description: "Custom AI integrations across GTM, RevOps, and Product that accelerate deals, prove value faster, and reduce sales effort.",
    problems: [
      "Painfully slow sales cycles",
      "Broken onboarding experiences",
      "High churn rates",
      "Data silos and integration debt",
    ],
    solutions: [
      "Buyer Enablement & Deal Acceleration",
      "Value Realization & Onboarding OS",
      "ICP Demand & ABM Engine",
    ],
    kpis: ["Sales cycle length ↓", "Time-to-first-value ↓", "CAC payback"],
  },
  {
    icon: Home,
    title: "Real Estate",
    slug: "real-estate",
    description: "AI-assisted speed-to-lead, deal rooms, and demand efficiency so agents connect faster, close cleaner, and spend less.",
    problems: [
      "Slow lead response times",
      "Info sprawl across email/SMS/CRM",
      "Skyrocketing marketing costs",
      "Work-life balance challenges",
    ],
    solutions: [
      "Speed-to-Lead Command Center",
      "Deal Room & Transaction Automation",
      "Demand Efficiency & Lead Quality Engine",
    ],
    kpis: ["Connect rate in <5 min", "Contract-to-close time ↓", "CAC ↓"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Industry-Specific AI Solutions
          </h1>
          <p className="text-xl text-muted-foreground">
            We build production-ready automation systems tailored to your industry's unique challenges.
            No generic tools—just systems that solve your specific problems.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <Card
              key={solution.slug}
              className="hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Overview */}
                <CardHeader className="lg:border-r border-border">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>

                  <div className="pt-6">
                    <Button asChild>
                      <Link href={`/solutions/${solution.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>

                {/* Right: Details */}
                <CardContent className="pt-6 lg:pt-12">
                  <div className="space-y-6">
                    {/* Problems */}
                    <div>
                      <h4 className="font-semibold mb-3">Problems We Solve:</h4>
                      <ul className="space-y-2">
                        {solution.problems.map((problem) => (
                          <li key={problem} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-error mt-2 flex-shrink-0" />
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="font-semibold mb-3">Our Solutions:</h4>
                      <ul className="space-y-2">
                        {solution.solutions.map((sol) => (
                          <li key={sol} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                            {sol}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* KPIs */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Metrics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.kpis.map((kpi) => (
                          <span
                            key={kpi}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                          >
                            {kpi}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-4">Not Sure Which Solution Fits?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free AI Integration Audit and we'll help you identify the highest-impact automation opportunities.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Your Free Audit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
