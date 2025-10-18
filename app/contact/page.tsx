import { ContactForm } from "@/components/shared/contact-form";
import { Calendar, Mail, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NeuralEdge",
  description: "Get your free AI Integration Audit. Schedule a call or send us a message to discuss your automation needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Let's Build Something That Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Free AI Integration Audit — No obligation, just value
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Calendly */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schedule a Call</h3>
              <p className="text-muted-foreground mb-4">
                Prefer to talk directly? Book a 30-minute audit call with our team.
              </p>
              <a
                href="https://calendly.com/shankarjadhav"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                Schedule on Calendly →
              </a>
            </div>

            {/* Email */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us Directly</h3>
              <p className="text-muted-foreground mb-4">
                Prefer email? Drop us a line and we'll respond within 24 hours.
              </p>
              <a
                href="mailto:shankarj888@gmail.com"
                className="inline-flex items-center text-primary hover:underline"
              >
                shankarj888@gmail.com
              </a>
            </div>

            {/* What Happens Next */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">What Happens Next</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center justify-center">
                    1
                  </span>
                  <div>
                    <p className="font-medium">24h Response</p>
                    <p className="text-sm text-muted-foreground">
                      We'll reach out to schedule your audit call
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center justify-center">
                    2
                  </span>
                  <div>
                    <p className="font-medium">48h Audit Call</p>
                    <p className="text-sm text-muted-foreground">
                      Deep dive into your workflows and pain points
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center justify-center">
                    3
                  </span>
                  <div>
                    <p className="font-medium">1 Week Blueprint</p>
                    <p className="text-sm text-muted-foreground">
                      Workflow map + template pack + pilot proposal
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center justify-center">
                    4
                  </span>
                  <div>
                    <p className="font-medium">2-3 Week Pilot</p>
                    <p className="text-sm text-muted-foreground">
                      MVP implementation with agreed KPIs
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Guarantee */}
            <div className="p-6 rounded-xl border border-success/20 bg-success/5">
              <h3 className="text-lg font-semibold mb-2">Our Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                If agreed pilot KPIs aren't met, we keep working free until they are—or you don't pay.
                We only win when you win.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
