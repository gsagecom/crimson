import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl p-1">
                <Image
                  src="/logo.svg"
                  alt="Crimson Industries Corporation"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Crimson Industries Corporation</h3>
                <p className="text-sm text-slate-400">Programme Management</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Reimagining Possibilities, Embracing Tomorrow&apos;s Intelligent Infrastructure
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              We provide programme delivery, governance oversight, and technical advisory services for national infrastructure projects, with particular expertise in emergency services and digital systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-crimson-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-crimson-400 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-crimson-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-slate-400 hover:text-crimson-400 transition-colors">
                  Governance
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-crimson-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <p className="text-slate-500 text-sm">Email:</p>
                <p className="text-slate-300">info@crimson.industries</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Phone:</p>
                <p className="text-slate-300">+44 7736 11 22 11</p>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Address:</p>
                <p className="text-slate-300">
                  Unit 5, Stroude Farm,<br />
                  Virginia Water, Surrey,<br />
                  GU25 4BY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              &copy; 2026 Crimson Industries Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-500 hover:text-crimson-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-500 hover:text-crimson-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
