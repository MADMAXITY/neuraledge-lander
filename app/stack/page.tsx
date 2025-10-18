"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data/projects";
import type { Metadata } from "next";

const stackCategories = [
  {
    name: "AI & LLM",
    tools: [
      { name: "OpenAI", description: "GPT-4, GPT-4o for text generation, function calling", logo: "/images/tools/openai.png" },
      { name: "Claude AI", description: "Anthropic's Claude for complex reasoning and long context", logo: "/images/tools/claude-ai.png" },
      { name: "Gemini", description: "Google's Gemini for multimodal tasks and extraction", logo: null },
      { name: "Ollama", description: "Local LLM inference for embeddings and privacy", logo: null },
    ],
  },
  {
    name: "Orchestration",
    tools: [
      { name: "n8n", description: "Self-hosted workflow automation with visual builder", logo: "/images/tools/n8n-color.png" },
      { name: "Make", description: "Cloud automation platform for complex scenarios", logo: "/images/tools/make-color.png" },
      { name: "Zapier", description: "Quick integrations and simple automations", logo: "/images/tools/zapier-logo.png" },
    ],
  },
  {
    name: "Data & Storage",
    tools: [
      { name: "Supabase", description: "Postgres + auth + storage + real-time", logo: "/images/tools/supabase-logo-png_seeklogo-435677.png" },
      { name: "PostgreSQL", description: "Production-grade relational database", logo: null },
      { name: "Vector Search", description: "Embeddings storage for RAG systems", logo: null },
    ],
  },
  {
    name: "Frontend",
    tools: [
      { name: "Next.js", description: "React framework for production web apps", logo: null },
      { name: "React", description: "UI library for interactive interfaces", logo: null },
      { name: "TypeScript", description: "Type-safe JavaScript for reliability", logo: null },
      { name: "Tailwind CSS", description: "Utility-first CSS framework", logo: null },
    ],
  },
  {
    name: "Backend & APIs",
    tools: [
      { name: "Python", description: "FastAPI, Flask for APIs and data processing", logo: null },
      { name: "Node.js", description: "JavaScript runtime for backend services", logo: null },
      { name: "Django", description: "Full-stack Python framework", logo: null },
    ],
  },
  {
    name: "Integrations",
    tools: [
      { name: "Zoho Books", description: "Accounting and invoicing automation", logo: null },
      { name: "Telegram", description: "Bot APIs for conversational interfaces", logo: null },
      { name: "Discord", description: "Voice and text bot automation", logo: null },
      { name: "Gmail/Docs", description: "Google Workspace integrations", logo: null },
      { name: "Salesforce", description: "CRM automation and data sync", logo: null },
      { name: "HubSpot", description: "Marketing and sales automation", logo: null },
    ],
  },
];

export default function StackPage() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const relatedProjects = selectedTool
    ? projects.filter((p) => p.stack.some((tech) => tech.toLowerCase().includes(selectedTool.toLowerCase())))
    : [];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Our Tech Stack
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production-grade tools and frameworks we use to build AI automation systems.
            Click any tool to see projects that use it.
          </p>
        </div>

        {/* Stack Categories */}
        <div className="space-y-12 mb-16">
          {stackCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool) => (
                  <Card
                    key={tool.name}
                    className={`cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all ${
                      selectedTool === tool.name ? "border-primary shadow-lg" : ""
                    }`}
                    onClick={() => setSelectedTool(tool.name === selectedTool ? null : tool.name)}
                  >
                    <CardHeader>
                      {tool.logo && (
                        <div className="relative w-16 h-16 mb-3">
                          <Image src={tool.logo} alt={tool.name} fill className="object-contain" />
                        </div>
                      )}
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    {selectedTool === tool.name && relatedProjects.length > 0 && (
                      <CardContent>
                        <p className="text-sm font-semibold mb-2">Used in:</p>
                        <div className="flex flex-wrap gap-1">
                          {relatedProjects.slice(0, 3).map((project) => (
                            <Badge key={project.id} variant="outline" className="text-xs">
                              {project.title}
                            </Badge>
                          ))}
                          {relatedProjects.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{relatedProjects.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Related Projects */}
        {selectedTool && relatedProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Projects Using {selectedTool}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Badge
                          variant={
                            project.status === "Production" ? "success" : project.status === "Deployed" ? "default" : "warning"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription>{project.oneLiner}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Want to Build With These Tools?</h3>
          <p className="text-muted-foreground mb-8">
            Get your free AI Integration Audit and we'll show you how to combine these technologies
            for your specific use case.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Get Your Free Audit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
