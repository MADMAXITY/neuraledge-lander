import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Looks like this page got lost in the workflow. Let's get you back on track.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              <Search className="mr-2 h-4 w-4" />
              Browse Projects
            </Link>
          </Button>
        </div>

        {/* Suggested Links */}
        <div className="text-sm text-muted-foreground">
          <p className="mb-4">Or try one of these:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/solutions" className="hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/process" className="hover:text-primary transition-colors">
              Our Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
