import Link from "next/link";
import Image from "next/image";

const footerNavigation = {
  solutions: [
    { name: "Social Media & Content", href: "/solutions/smmc" },
    { name: "High-Ticket SaaS", href: "/solutions/saas" },
    { name: "Real Estate", href: "/solutions/real-estate" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "https://www.neuraledge.blog/" },
    { name: "Workflows", href: "/workflows" },
    { name: "Tech Stack", href: "/stack" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <Image 
                src="/logo.png" 
                alt="NeuralEdge" 
                width={56} 
                height={56}
                quality={100}
                unoptimized
                className="h-14 w-auto drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              Integrated AI agents that do the robot work so your team can do the human work.
            </p>
            <p className="text-sm text-muted-foreground">
              📧 shankarj888@gmail.com
            </p>
          </div>

          {/* Links sections */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">
                Resources
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-border pt-8 sm:mt-16 lg:mt-20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} NeuralEdge. Production-ready AI systems.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <span>Limited availability</span>
              <span>•</span>
              <span>Pay-on-proof model</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
