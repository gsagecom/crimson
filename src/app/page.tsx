import Link from "next/link";
import {
  Phone,
  Shield,
  FileText,
  Globe,
  Siren,
  Lock,
  Building,
  AlertTriangle,
  CheckCircle,
  Users,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Emergency Communications",
    description:
      "Next-generation 911/999/112 platforms, dispatch systems, CAD integration, and multi-agency interoperability for nationwide deployments.",
  },
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description:
      "Hardened government networks, sovereign data architectures, redundant transmission systems, and cyber-resilient communications platforms.",
  },
  {
    icon: FileText,
    title: "Programme Delivery",
    description:
      "End-to-end leadership for GBP 100M+ infrastructure initiatives - governance frameworks, Critical Chain methodology, and cross-departmental alignment.",
  },
  {
    icon: Globe,
    title: "Digital Government",
    description:
      "Citizen-facing platforms, inter-agency data exchange, administrative system modernisation, and legacy infrastructure bridging.",
  },
];

const industries = [
  {
    icon: Siren,
    title: "Emergency Services & Public Safety",
    description: "NG911/NG112, dispatch, interoperability",
  },
  {
    icon: Lock,
    title: "Critical National Infrastructure",
    description: "Secure comms, hardened networks, data sovereignty",
  },
  {
    icon: Building,
    title: "Digital Government",
    description: "Citizen platforms, agency integration, system modernisation",
  },
  {
    icon: AlertTriangle,
    title: "Programme Transformation",
    description: "Governance, delivery assurance, waste elimination",
  },
];

const differentiators = [
  {
    title: "We deliver, not advise.",
    description: "We take accountability for outcomes - not just recommendations.",
  },
  {
    title: "We operate in complexity.",
    description:
      "Multi-jurisdiction, multi-agency, politically sensitive programmes are our operating environment.",
  },
  {
    title: "We eliminate waste.",
    description:
      "Our governance frameworks expose delivery failures before they cost you years and millions.",
  },
  {
    title: "Global Reach, Local Expertise",
    description:
      "Our expertise spans complex governmental programmes across multiple continents and regulatory environments.",
  },
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-crimson-400 font-semibold tracking-wide uppercase mb-4">
              Programme Delivery & Critical Infrastructure
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              National Infrastructure Delivery for{" "}
              <span className="text-crimson-500">Government & Public Safety</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We deliver emergency communications systems, secure networks, and
              large-scale transformation programmes where failure is not an option.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="bg-crimson-600 hover:bg-crimson-700 text-white px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl font-medium flex items-center justify-center gap-2">
                  Talk to Us
                  <span>&rarr;</span>
                </button>
              </Link>
              <Link href="/services">
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full transition-all duration-200 font-medium">
                  Our Capabilities
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-crimson-600 font-semibold tracking-wide uppercase mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Programme Leadership for High-Stakes Environments
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Crimson Industries Corporation provides programme leadership and
              systems delivery for government clients operating in high-stakes,
              complex environments. Our focus: next-generation emergency services
              infrastructure, secure government communications, and multi-year
              transformation programmes requiring coordination across jurisdictions,
              agencies, and political stakeholders.
            </p>
            <p className="text-lg text-slate-700 font-medium max-w-3xl mx-auto mt-6">
              We work where the margin for error is zero - national emergency
              response systems, critical communications infrastructure, and
              programmes under ministerial scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-crimson-600 font-semibold tracking-wide uppercase mb-4">
              What We Deliver
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Critical Infrastructure Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
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
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-crimson-600 font-semibold tracking-wide uppercase">
                Track Record
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Proven Delivery at Scale
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We&apos;ve led programmes in emergency services, telecommunications,
                financial services, and critical national infrastructure - in both
                classified and unclassified government environments.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-crimson-600 text-white p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-1">25+</div>
                <div className="text-crimson-200 text-sm">
                  Years directing complex transformation programmes
                </div>
              </div>
              <div className="bg-crimson-700 text-white p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-1">£12B+</div>
                <div className="text-crimson-200 text-sm">
                  In programme value delivered
                </div>
              </div>
              <div className="bg-crimson-800 text-white p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-1">27</div>
                <div className="text-crimson-200 text-sm">
                  Countries across UK, EU, Americas, Middle East and Africa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-crimson-600 font-semibold tracking-wide uppercase mb-4">
              Industries We Serve
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Specialized Expertise Across Critical Sectors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-crimson-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-7 h-7 text-crimson-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{industry.title}</h3>
                <p className="text-slate-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Governments Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-crimson-600 font-semibold tracking-wide uppercase mb-4">
              Why Governments Work With Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Accountability for Outcomes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-crimson-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-crimson-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-crimson-600">USD12B+</div>
              <div className="text-slate-600 text-sm">Value Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-crimson-600">27</div>
              <div className="text-slate-600 text-sm">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-crimson-600 to-crimson-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Deliver Critical Infrastructure?
          </h2>
          <p className="text-lg text-crimson-100 mb-8">
            Partner with Crimson Industries Corporation for programme delivery
            where failure is not an option. Let&apos;s discuss your next initiative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-crimson-700 hover:bg-crimson-50 px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl font-medium flex items-center gap-2 mx-auto">
                Talk to Us
                <span>&rarr;</span>
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-transparent hover:bg-white/10 text-white border border-white/50 px-8 py-4 rounded-full transition-all duration-200 font-medium">
                Our Capabilities
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
