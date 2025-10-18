import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media & Content Solutions | NeuralEdge",
  description: "Platform-native content automation and conversation systems that turn attention into DMs without burning out your team.",
};

const solutions = [
  {
    title: "Platform-Native Short-Form Video Engine",
    description: "Consistent short-form output that feels native per platform—without burnout or algorithm chasing.",
    features: [
      "Platform playbooks for TikTok, IG Reels, YouTube Shorts, X, LinkedIn",
      "Produce-once, auto-adapt pipeline (ratios, captions, thumbnails)",
      "A/B hook testing and CTA optimization",
      "Weekly iteration loop: keep winners, refresh hooks",
      "Human-in-the-loop approvals + brand voice guardrails",
    ],
    kpis: ["Hook retention at 3s/8s", "Average watch %", "Saves/share rate", "Views to DM rate"],
  },
  {
    title: "Authenticity Engine",
    description: "Fight AI content fatigue with brand voice protection and editorial oversight.",
    features: [
      "Brand Voice Library (tone, story pillars, redlines)",
      "Human gating: drafts → approve/edit → publish",
      "No-BS filter that flags cliché/overused patterns",
      "Comment sentiment tracking",
      "Follower quality metrics",
    ],
    kpis: ["Comment sentiment", "Replies per post", "Average watch time", "Follower quality"],
  },
  {
    title: "Conversation Desk",
    description: "Conversations > Content. Engage daily with your community at scale.",
    features: [
      "Unified comment/DM inbox across platforms",
      "AI drafts smart, on-brand replies",
      "One-tap approval and send",
      "Escalation rules (lead, support, troll, collab)",
      "Community streaks and engagement tasks",
    ],
    kpis: ["Reply rate", "DM starts/day", "Lead handoffs", "Community retention"],
  },
];

const projects = [
  { name: "ReelrOS", description: "Ecom short-form video engine", status: "Production" },
  { name: "DreamReelr", description: "Full video agent (idea → post)", status: "Production" },
  { name: "IcebreakerOS", description: "Hyper-personalized outreach", status: "R&D" },
];

export default function SMMCSolutionPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <Badge variant="secondary" className="mb-4">Social Media & Content</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Turn Attention Into DMs—Without Burning Out Your Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Platform-native content and conversation systems that fight algorithm fatigue,
            preserve authenticity, and convert attention into real relationships.
          </p>
        </div>

        {/* Problems Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Problems We Solve</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Content fatigue: Weekly grind of posting, chasing trends, staying authentic",
              "Algorithm chasing: Creativity sacrificed for \"optimal times\" and trending sounds",
              "AI content fatigue: Growing rejection of generic AI-generated content",
              "Low conversion: High views but low DM engagement",
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
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant={project.status === "Production" ? "success" : "warning"}>
                    {project.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Content—The Right Way?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your free AI Integration Audit and see how we can automate the robot work
            while keeping your content authentic and converting.
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
