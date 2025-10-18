import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Solutions | NeuralEdge",
  description: "AI-assisted speed-to-lead, deal rooms, and demand efficiency so agents connect faster, close cleaner, and spend less.",
};

const solutions = [
  {
    title: "Speed-to-Lead Command Center",
    description: "Slow reach-outs kill conversions. Get leads into conversations within 5 minutes, every time.",
    features: [
      "Unified lead inbox (portal, ads, site, DMs) with instant triage",
      "5-minute SLA alerts for every new lead",
      "AI reply drafts (property-aware) for text/email",
      "Human-approve-and-send workflow",
      "Lead fit/intent scoring + smart routing to right agent",
    ],
    kpis: ["Connect rate in <5 min", "Appointment-set %", "Cost per appointment", "Lead→Client conversion"],
  },
  {
    title: "Deal Room & Transaction Automation",
    description: "Info sprawl across email, SMS, CRM, and title companies kills efficiency. One timeline, one truth.",
    features: [
      "Deal timeline syncing messages, docs, and dates into one view",
      "AI meeting/email summaries → auto CRM notes",
      "E-signature templates and routing",
      "Deadline watchdogs (inspection, loan, option, escrow)",
      "Exception escalations and conflict alerts",
    ],
    kpis: ["Missed-deadline incidents ↓", "Time to clear contingencies", "Contract-to-close time", "Admin hours saved"],
  },
  {
    title: "Demand Efficiency & Lead Quality Engine",
    description: "Skyrocketing marketing costs and inconsistent lead quality need smarter targeting and optimization.",
    features: [
      "Creative/keyword A/B testing loops with auto-pause on low performers",
      "Suppression lists and negative keyword management",
      "Cross-source attribution (Facebook, Google, Zillow, etc.)",
      "AI scoring to prioritize high-intent buyers/sellers",
      "ROI dashboards by source and campaign",
    ],
    kpis: ["CAC ↓", "Cost per appointment ↓", "MQL→Appointment %", "ROI by source"],
  },
];

const projects = [
  { name: "LedgerPilot", description: "Invoice automation (adaptable for transaction docs)", status: "Production" },
];

export default function RealEstateSolutionPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <Badge variant="secondary" className="mb-4">Real Estate</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Connect Faster, Close Cleaner, Spend Less
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            AI-assisted speed-to-lead, deal rooms, and demand efficiency so agents
            can focus on relationships—not chasing leads, tracking paperwork, or managing ad spend.
          </p>
        </div>

        {/* Problems Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Problems We Solve</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Slow lead response: Leads go cold when follow-up takes hours instead of minutes",
              "Info sprawl: Email, SMS, CRM, title company—no single source of truth",
              "Skyrocketing marketing costs: High CAC with inconsistent lead quality",
              "Burnout: On call 24/7, working nights/weekends/holidays with no life balance",
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
          <div className="grid md:grid-cols-1 gap-6">
            {projects.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="success">{project.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Ready to Win Back Your Time?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your free AI Integration Audit and see how we can automate lead response,
            streamline transactions, and optimize your marketing spend.
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
