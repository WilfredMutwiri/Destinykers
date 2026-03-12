import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Our Process", path: "/process" },
    { name: "Industries", path: "/industries" },
    { name: "Portfolio", path: "/portfolio" },
  ],
  services: [
    { name: "E-commerce Systems", path: "/services" },
    { name: "M-Pesa Integrations", path: "/services" },
    { name: "AI Agents & Chatbots", path: "/services" },
    { name: "AI Business Automation", path: "/services" },
    { name: "SEO Optimization", path: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100 border-t border-white/10">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="Destinykers Technologies"
                className="h-11 w-11 rounded-full border border-white/20"
              />
              <div>
                <p className="font-semibold">Destinykers Technologies</p>
                <p className="text-xs text-slate-300">Kenya Digital Build Partner</p>
              </div>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              We design conversion-ready websites and systems for Kenyan businesses in
              retail, fintech, professional services, hospitality, and health.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A108271034&keywords=Destinykers%20Technologies&origin=ENTITY_SEARCH_HOME_HISTORY&sid=Ua9"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61571017756341"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <Link
                to="/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Core Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Mail className="h-5 w-5 mt-0.5 text-secondary" />
                <a href="mailto:info@destinykers.co.ke" className="hover:text-white transition-colors">
                  info@destinykers.co.ke
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Phone className="h-5 w-5 mt-0.5 text-secondary" />
                <a href="tel:+254115651863" className="hover:text-white transition-colors">
                  +254 11 5651 863
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="h-5 w-5 mt-0.5 text-secondary" />
                <span>Moi Avenue, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-slate-400 flex flex-col md:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Destinykers Technologies. All rights reserved.</p>
          <p>Built for growth-focused Kenyan businesses.</p>
        </div>
      </div>
    </footer>
  );
}
