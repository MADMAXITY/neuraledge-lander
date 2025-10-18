import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle, TrendingUp } from "lucide-react";
import { projects } from "@/lib/data/projects";
import type { Metadata } from "next";

// Case study content for each project
const caseStudies: Record<string, {
  challenge: string;
  solution: string;
  implementation: string[];
  results: { metric: string; value: string; description: string }[];
  learnings: string[];
}> = {
  ledgerpilot: {
    challenge: "SMEs were spending 10-15 hours/week on manual invoice data entry into Zoho Books. Process prone to errors, slow vendor/item creation, and GST calculation mistakes. Finance teams drowning in repetitive work.",
    solution: "Built end-to-end automated pipeline: PDF/scan upload → Gemini/GPT extraction → normalization engine → Zoho Books API write. Includes new vendor/item auto-creation, discount handling, GST validation, and human-in-the-loop approval workflow.",
    implementation: [
      "Multi-channel intake: Telegram bot + Web UI for invoice uploads",
      "LLM extraction layer with structured output validation (Gemini Pro + GPT-4)",
      "Normalization engine handling vendor matching, item lookup, GST calculations",
      "Zoho Books integration with atomic writes and rollback on failure",
      "Approval dashboard with side-by-side comparison (extracted vs. original)",
      "Audit trail and error handling with Slack alerts",
    ],
    results: [
      { metric: "Time Saved", value: "85%", description: "From 12 hours/week to under 2 hours" },
      { metric: "Accuracy", value: "98%", description: "Up from 87% with manual entry" },
      { metric: "Vendor Creation", value: "Automated", description: "No more manual vendor setup" },
      { metric: "ROI", value: "6 weeks", description: "Payback period on implementation" },
    ],
    learnings: [
      "Human-in-the-loop approval critical for trust in early days",
      "GST handling requires region-specific business rules, not just LLM extraction",
      "Vendor name fuzzy matching (80% threshold) prevents duplicate creation",
      "Cloudflare Tunnels enable secure access without VPN complexity",
    ],
  },
  ecomradar: {
    challenge: "Ecommerce product research was taking 20+ hours/week across Amazon, AliExpress, competitor sites. Manual spreadsheet tracking, inconsistent data, and no way to query insights across products.",
    solution: "Built AI-powered research assistant with Playwright scrapers, Postgres storage, embeddings-based search, and SQL copilot. Natural language queries over product data, trends, and pain points.",
    implementation: [
      "Playwright scrapers for Amazon/AliExpress with rotating proxies",
      "Structured data storage in Postgres (products, reviews, pricing, trends)",
      "OpenAI embeddings for semantic search over product descriptions",
      "AI SQL copilot with tool calling (get_db_schema, postgres_query)",
      "Next.js dashboard with filters, charts, and conversational interface",
      "Scheduled scraping with change detection and alerts",
    ],
    results: [
      { metric: "Research Speed", value: "20x faster", description: "From 20 hours to 1 hour/week" },
      { metric: "Data Points", value: "50,000+", description: "Products tracked across platforms" },
      { metric: "Query Time", value: "<3 seconds", description: "Natural language to insights" },
      { metric: "Accuracy", value: "95%", description: "SQL generation accuracy" },
    ],
    learnings: [
      "Embeddings-based search outperforms keyword search for product discovery",
      "SQL copilot needs schema context in every prompt for reliable queries",
      "Change detection on price/reviews more valuable than daily full scrapes",
      "Rate limiting and proxy rotation essential for scraper reliability",
    ],
  },
  reelros: {
    challenge: "Content creators spending 3-4 hours per reel on production: scripting, sourcing images/video, editing, captioning, music. Impossible to scale without sacrificing quality or authenticity.",
    solution: "Built end-to-end short-form video generation engine with Strategic Infusion framework. Quote → image prompt → image generation → video generation → captions → music → assembly. Full reel in 15 minutes.",
    implementation: [
      "Quote generation with brand voice library and duplicate filter",
      "Image prompting with cinematic direction (angle, lighting, composition)",
      "Flux Dev for image generation with consistent aesthetic",
      "LTX Video for motion (image-to-video)",
      "Automated captions with font/position templating",
      "Music library integration with mood matching",
      "FFmpeg assembly pipeline with transitions",
    ],
    results: [
      { metric: "Production Time", value: "93% faster", description: "From 4 hours to 15 minutes per reel" },
      { metric: "Output Volume", value: "10x increase", description: "From 2 reels/week to 20 reels/week" },
      { metric: "Engagement", value: "+45%", description: "Higher saves/shares vs. manual content" },
      { metric: "Cost", value: "$0.80/reel", description: "Including GPU compute and API costs" },
    ],
    learnings: [
      "Brand voice library prevents AI content fatigue",
      "Human review of quotes maintains authenticity (approve/reject/edit)",
      "Image-to-video more controllable than text-to-video for consistent aesthetic",
      "Strategic Infusion variables (persuasion frameworks) boost conversion",
    ],
  },
  nyx: {
    challenge: "Personal assistant tasks (email, calendar, docs, reminders) required constant context switching. No unified voice interface with memory and action capabilities across tools.",
    solution: "Built Discord-based voice AI agent with persistent memory, embeddings search, and tool calling. Voice-to-voice interaction with Gmail, Google Docs, Discord, Telegram actions.",
    implementation: [
      "Discord voice channel integration with real-time audio streaming",
      "ASR (Whisper) for speech-to-text with noise filtering",
      "Supabase for conversation memory and user preferences",
      "Ollama local embeddings for semantic memory search",
      "Tool library: Gmail read/send, Docs create/edit, Discord/Telegram post",
      "TTS (ElevenLabs) for natural voice responses",
    ],
    results: [
      { metric: "Task Time", value: "70% faster", description: "Voice commands vs. manual operations" },
      { metric: "Memory Recall", value: "95%", description: "Accurate context from past conversations" },
      { metric: "Tool Success", value: "92%", description: "Successful action execution rate" },
      { metric: "Daily Usage", value: "15-20 commands", description: "Average daily interactions" },
    ],
    learnings: [
      "Local embeddings (Ollama) reduce latency vs. cloud for memory search",
      "Voice activity detection critical to prevent mid-sentence cutoffs",
      "Tool descriptions must be precise for reliable function calling",
      "User confirmation for destructive actions (delete, send) increases trust",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return { title: "Project Not Found | NeuralEdge" };
  }

  return {
    title: `${project.title} Case Study | NeuralEdge`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const caseStudy = caseStudies[slug];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant={project.status === "Production" ? "success" : project.status === "Deployed" ? "default" : "warning"}>
              {project.status}
            </Badge>
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.oneLiner}</p>
        </div>

        {/* Tech Stack */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-lg">Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline">{tech}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {caseStudy ? (
          <>
            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </section>

            {/* Solution */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{caseStudy.solution}</p>
              
              <h3 className="font-semibold mb-3">Implementation Details:</h3>
              <ul className="space-y-2">
                {caseStudy.implementation.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result) => (
                  <Card key={result.metric}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-lg mb-1">{result.metric}</p>
                          <p className="text-2xl font-bold text-primary mb-2">{result.value}</p>
                          <p className="text-sm text-muted-foreground">{result.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Learnings */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="space-y-3">
                  {caseStudy.learnings.map((learning, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-bold">→</span>
                      <span className="text-muted-foreground">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Detailed case study coming soon.</p>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Want a System Like This?</h3>
          <p className="text-muted-foreground mb-8">
            Get your free AI Integration Audit and see how we can build a custom solution for your needs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Your Free Audit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
