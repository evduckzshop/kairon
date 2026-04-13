import { ExternalLink } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Pricing" },
    { href: "/services#starter", label: "Starter Package" },
    { href: "/services#growth", label: "Growth Package" },
    { href: "/services#enterprise", label: "Enterprise" },
  ],
  resources: [
    { href: "/book", label: "Book a Call" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-kairon-gray/10 bg-kairon-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="font-[family-name:var(--font-display)] text-xl font-bold text-kairon-white"
            >
              改 KAIRON
            </a>
            <p className="mt-3 text-sm text-kairon-gray leading-relaxed">
              AI-powered workflow automation for small businesses. Your business,
              always moving.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-kairon-gray hover:text-kairon-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="text-kairon-gray hover:text-kairon-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-kairon-white">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-kairon-gray hover:text-kairon-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-kairon-white">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-kairon-gray hover:text-kairon-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-kairon-white">
              Resources
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-kairon-gray hover:text-kairon-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-kairon-gray/10 pt-8 md:flex-row">
          <p className="text-xs text-kairon-gray">
            &copy; {new Date().getFullYear()} Kairon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="text-xs text-kairon-gray hover:text-kairon-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-xs text-kairon-gray hover:text-kairon-white transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
