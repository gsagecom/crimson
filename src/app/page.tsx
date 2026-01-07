import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Shield,
  Zap,
  Users,
  Building,
  AlertTriangle,
  Eye,
  Lock,
  Phone,
  Truck,
  Siren,
  Radio,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Turnkey Megaproject Management",
    description: "Predictable end-to-end project delivery from conception to completion",
  },
  {
    icon: Shield,
    title: "Design Coordination & Governance Solutions",
    description: "Strategic oversight and deployment coordination excellence",
  },
  {
    icon: Zap,
    title: "Next Generation Predictable Project Management",
    description: "AI-enhanced project management via Strategy Exection Office ",
  },
  {
    icon: Users,
    title: "AI augmented Quality Assurance and Compliance Solutions",
    description: "Intelligent quality control systems",
  },
  {
    icon: Building,
    title: "Commercial & Asset Management",
    description: "Comprehensive procurement-to-sunset asset lifecycle management",
  },
  {
    icon: AlertTriangle,
    title: "Risk & Security Management",
    description: "Proactive risk prediction and pivot strategies",
  },
  {
    icon: Eye,
    title: "Public Safety Systems",
    description: "Next-generation Emergency Services (NEXES)",
  },
  {
    icon: Lock,
    title: "Cyber Security & Surveillance",
    description: "Next-generation public safety security solutions",
  },
];

const industries = [
  { icon: Phone, title: "Telecom Infrastructure" },
  { icon: Truck, title: "Logistics and Security" },
  { icon: Siren, title: "Next Generation Emergency Services" },
  { icon: Radio, title: "Next Generation 999/911/112" },
  { icon: Lock, title: "Surveillance & cyber security" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/1792117266/2159531653.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-crimson-400 font-semibold tracking-wide uppercase mb-4">
              CRIMSON INDUSTRIES TASKFORCE
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Programme Delivery for your most{" "}
              <span className="text-crimson-500">Complex Initiatives</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Predictable transformation through Next Generation governance, technology, and
              disciplined execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-crimson-600 hover:bg-crimson-700 text-white px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2">
                  Discover More
                  <span>&rarr;</span>
                </button>
              </Link>
              <Link href="/services">
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full transition-all duration-200 font-medium">
                  Find Your Solution
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Making Tomorrow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Making Tomorrow&apos;s Intelligent Infrastructure Possible
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We are a specialist global reach taskforce established to transcend
              traditional project management boundaries, through strategic
              partnerships with global leaders to provide transformative
              infrastructure solutions that shape the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-crimson-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-crimson-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {services.slice(4).map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-crimson-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-crimson-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We drive your projects to success with our expert guidance,
              supporting you every step of the way and ensuring maximum value
              from inception to completion.
            </p>
            <Link href="/contact">
              <button className="bg-crimson-600 hover:bg-crimson-700 text-white px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg font-medium flex items-center gap-2 mx-auto">
                Find Your Solution
                <span>&rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-crimson-100 text-crimson-700 px-4 py-2 rounded-full text-sm font-medium">
                <span>GET TO KNOW US</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Redefining What&apos;s Possible
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Backed by a consortium of industry experts, the Crimson Industries Corporation Programme Management Taskforce transcends mere project management, forging strategic partnerships with global leaders to provide transformative infrastructure solutions. We deliver beyond blueprints, crafting lasting legacies across the region, from civil infrastructure and transport to next generation emergency services and cyber security projects.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-crimson-600 mt-2" />
                  <p className="text-slate-600">
                    Decades of experience in complex governmental and commercial
                    mega projects in the UK | USA & Americas | EU | AFRICA
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-crimson-600 mt-2" />
                  <p className="text-slate-600">
                    Extensive network of regional and international partnerships
                    with access to world-class resources and best practice
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-crimson-600 mt-2" />
                  <p className="text-slate-600">
                    Hands-on experience in engineering infrastructure that
                    fosters economic growth, social well-being, and environmental
                    sustainability
                  </p>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-crimson-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-crimson-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                  Strategic Excellence
                </h3>
                <p className="text-slate-600 text-center mb-8">
                  Our expertise spans complex governmental and commercial mega
                  projects across the UK, USA, Americas, EU, and Africa.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-crimson-600 text-white p-6 rounded-2xl text-center">
                    <div className="text-3xl font-bold mb-1">93+</div>
                    <div className="text-crimson-200 text-sm">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="bg-crimson-700 text-white p-6 rounded-2xl text-center">
                    <div className="text-3xl font-bold mb-1">18</div>
                    <div className="text-crimson-200 text-sm">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-crimson-600 to-crimson-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Time to create the Intelligent{" "}
            <span className="text-crimson-200">FUTURE.</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-medium mb-6">
            Contact us today, and let&apos;s redefine what&apos;s possible.
          </h3>
          <p className="text-lg text-crimson-100 mb-8">
            Join us and shape an Intelligent future! Reach out today, and
            together, we&apos;ll redefine what&apos;s really possible.
          </p>
          <Link href="/contact">
            <button className="bg-white text-crimson-700 hover:bg-crimson-50 px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl font-medium flex items-center gap-2 mx-auto">
              Contact Us Today
              <span>&rarr;</span>
            </button>
          </Link>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Industries
            </h2>
            <p className="text-lg text-slate-600">
              Specialized expertise across critical infrastructure sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-crimson-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-7 h-7 text-crimson-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  {industry.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
