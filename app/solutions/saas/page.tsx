import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Ticket SaaS Solutions | NeuralEdge",
  description: "Custom AI integrations across GTM, RevOps, and Product that accelerate deals, prove value faster, and reduce sales effort.",
};

const solutions = [
  {
    title: "Buyer Enablement & Deal Acceleration",
    description: "Painfully slow cycles and POVs that don't convert need a single source of truth and automated buyer enablement.",
    features: [
      "AI deal room syncing Gmail/Outlook, Slack, calendar, docs → one timeline per opportunity",
      "Auto write-back to CRM (Salesforce/HubSpot)",
      "AI-generated Mutual Action Plans (MAPs) & POV success criteria",
      "Stakeholder extraction and next-step nudges with stall alerts",
      "Auto-assembled exec ROI one-pagers + security pack (SOC2, data flows, RBAC)",
    ],
    kpis: ["Sales cycle length ↓", "POV→Close %", "Multi-thread depth", "Stakeholder response time", "Exec meeting rate"],
  },
  {
    title: "Value Realization & Onboarding OS",
    description: "Broken/complex onboarding kills activation and drives churn. Get users to first value in days, not weeks.",
    features: [
      "In-product AI guide with role-based first-value paths (3 wins in 14 days)",
      "Automated SSO/SAML/SCIM checks and troubleshooting",
      "AI triage for connector errors (Salesforce/Okta/Snowflake/etc.)",
      "Adoption nudges based on usage telemetry",
      "QBR snapshots and auto exec value reports tied to outcomes",
    ],
    kpis: ["Time-to-first-value ↓", "Week-4 activation %", "Feature adoption breadth", "GRR/NDR ↑"],
  },
  {
    title: "ICP Demand & ABM Engine",
    description: "High CAC, low lead quality, and weak pipeline need smarter targeting and account intelligence.",
    features: [
      "AI account research copilot (tech stack, hiring, signals)",
      "Fit/intent scoring and routing to right rep",
      "Problem-first content auto-tailored by industry/role",
      "Webinar → sequence automations with behavior tracking",
      "Trust hub (customer stories, security FAQs, architecture diagrams)",
    ],
    kpis: ["Demo→SQL %", "SQL rate", "CAC payback", "Pipeline coverage", "Win rate"],
  },
];

const projects = [
  { name: "EcomRadar", description: "AI research assistant with RAG", status: "Production" },
  { name: "BetterPrompt", description: "Prompt ops suite", status: "Deployed" },
];

export default function SaaSSolutionPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <Badge variant="secondary" className="mb-4">High-Ticket SaaS</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Accelerate Deals, Prove Value Faster, Reduce Churn
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Custom AI integrations across GTM, RevOps, and Product that shorten sales cycles,
            fix onboarding, and drive expansion—so your team can focus on relationships, not admin.
          </p>
        </div>

        {/* Problems Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Problems We Solve</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Painfully slow sales cycles: Too many emails, Slack messages, calls—no single source of truth",
              "Broken onboarding: Too much work before first value, clients drop off before seeing ROI",
              "High churn: Poor activation and value realization in early days",
              "High CAC: Marketing to wrong people, weak lead qualification and trust signals",
            ].map((problem) => (
              <Card key={problem}>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">{problem}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Solutions</h2>
          <div className="space-y-8">
            {solutions.map((solution) => (
              <Card key={solution.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">KPIs We Track:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.kpis.map((kpi) => (
                        <Badge key={kpi} variant="outline">{kpi}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant={project.status === "Production" ? "success" : "default"}>
                    {project.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your GTM Motion?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your free AI Integration Audit and see how we can automate deal operations,
            fix onboarding, and drive predictable expansion.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get Your Free Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
