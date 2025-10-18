import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GitBranch, Zap, Database } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflows | NeuralEdge",
  description: "Explore our automation workflows and see how we build production systems.",
};

const workflows = [
  {
    name: "EcomRadar Nyx",
    description: "SQL copilot for e-commerce research with natural language queries",
    complexity: "Medium",
    nodes: 5,
    features: ["AI Agent", "PostgreSQL Tool", "Schema Tool", "Chat Trigger", "LLM (OpenAI)"],
    capabilities: [
      "Natural language to SQL conversion",
      "Database schema introspection",
      "Safe read-only queries",
      "Conversational interface",
    ],
  },
  {
    name: "InvoicePilot Executioner",
    description: "End-to-end invoice processing with Gemini extraction and Zoho Books integration",
    complexity: "High",
    nodes: 15,
    features: ["Telegram Trigger", "Gemini API", "Data Normalization", "Zoho Books API", "Human Approval"],
    capabilities: [
      "Multi-channel intake (Telegram/Web)",
      "LLM-based data extraction",
      "Vendor/item auto-creation",
      "GST calculation and validation",
      "Approval workflow with rollback",
    ],
  },
  {
    name: "ReelrOS",
    description: "Short-form video generation engine with Strategic Infusion framework",
    complexity: "High",
    nodes: 20,
    features: ["Quote Generator", "Image Prompting", "Flux/LTX Video", "FFmpeg Assembly", "TTS"],
    capabilities: [
      "Brand voice-aligned quote generation",
      "Cinematic image prompting",
      "Image-to-video generation",
      "Automated captioning",
      "Music integration and assembly",
    ],
  },
  {
    name: "Blog Structure Design",
    description: "Automated blog post structuring with SEO optimization",
    complexity: "High",
    nodes: 25,
    features: ["Research Agent", "Outline Generator", "Section Writer", "SEO Optimizer", "Content Assembly"],
    capabilities: [
      "Topic research and analysis",
      "Hierarchical outline generation",
      "Section-by-section writing",
      "Keyword optimization",
      "Meta description generation",
    ],
  },
  {
    name: "Blog Topic Research",
    description: "Automated content topic discovery with trend analysis",
    complexity: "Medium",
    nodes: 12,
    features: ["Web Scraping", "Trend Analysis", "AI Scoring", "Data Storage", "Alert System"],
    capabilities: [
      "Multi-source trend scanning",
      "Relevance scoring with AI",
      "Competitive gap analysis",
      "Topic clustering",
      "Priority recommendations",
    ],
  },
  {
    name: "Nyx Voice Agent",
    description: "Discord voice assistant with memory and tool calling",
    complexity: "High",
    nodes: 10,
    features: ["Discord Voice", "ASR/TTS", "Memory (Supabase)", "Tool Library", "Embeddings Search"],
    capabilities: [
      "Voice-to-voice interaction",
      "Persistent conversation memory",
      "Tool calling (Gmail, Docs, etc.)",
      "Semantic memory search",
      "Natural language understanding",
    ],
  },
];

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Our Production Workflows
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complex automation pipelines built with n8n, Make, and custom orchestration.
            Each workflow is battle-tested in production environments.
          </p>
        </div>

        {/* Workflows Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {workflows.map((workflow) => (
            <Card key={workflow.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-xl">{workflow.name}</CardTitle>
                  <Badge variant={
                    workflow.complexity === "High" ? "warning" : 
                    workflow.complexity === "Medium" ? "default" : "secondary"
                  }>
                    {workflow.complexity}
                  </Badge>
                </div>
                <CardDescription>{workflow.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4" />
                    <span>{workflow.nodes} nodes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>{workflow.features.length} features</span>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <p className="text-sm font-semibold mb-2">Key Components:</p>
                  <div className="flex flex-wrap gap-1">
                    {workflow.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div>
                  <p className="text-sm font-semibold mb-2">Capabilities:</p>
                  <ul className="space-y-1">
                    {workflow.capabilities.slice(0, 3).map((capability) => (
                      <li key={capability} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {capability}
                      </li>
                    ))}
                    {workflow.capabilities.length > 3 && (
                      <li className="text-xs text-muted-foreground italic">
                        +{workflow.capabilities.length - 3} more capabilities
                      </li>
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <Card className="mb-16 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-primary" />
              Interactive Workflow Visualizer — Coming Soon
            </CardTitle>
            <CardDescription>
              We're building an interactive React Flow visualizer to explore these workflows in detail.
              Click nodes to see logic, hover for descriptions, and download templates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Features in development:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Interactive node exploration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Zoom and pan controls
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Logic inspection per node
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Downloadable templates
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Want Custom Workflows Like These?</h3>
          <p className="text-muted-foreground mb-8">
            Get your free AI Integration Audit and we'll design a workflow architecture
            tailored to your specific automation needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Your Free Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
