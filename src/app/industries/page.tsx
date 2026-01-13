import Link from "next/link";
import {
  FileText,
  Shield,
  Zap,
  CheckCircle,
  Building,
  AlertTriangle,
  Eye,
  Lock,
} from "lucide-react";

const industries = [
  {
    icon: FileText,
    title: "Emergency Services & Public Safety",
    description:
      "Next-generation emergency communications infrastructure for national and regional deployments.",
    capabilities: [
      "NG911/NG112 call handling and dispatch systems",
      "Multi-agency interoperability platforms",
      "CAD integration and legacy system migration",
      "24/7 operational continuity during transition",
    ],
    deliveryFocus:
      "Nationwide deployments requiring coordination across multiple jurisdictions, complex stakeholder environments, and regulatory compliance.",
  },
  {
    icon: Shield,
    title: "Critical National Infrastructure",
    description:
      "Secure communications networks for government command, control, and coordination operations.",
    capabilities: [
      "Hardened data centre design and implementation",
      "Redundant transmission systems",
      "Cyber-resilient network architectures",
      "Sovereign data residency solutions",
    ],
    deliveryFocus:
      "Systems where national security, operational continuity, and regulatory compliance are non-negotiable.",
  },
  {
    icon: Zap,
    title: "Programme Delivery & Transformation",
    description:
      "Strategic leadership for large-scale infrastructure modernisation programmes.",
    capabilities: [
      "End-to-end programme direction (£100M+ initiatives)",
      "Governance frameworks that eliminate delivery waste",
      "Critical Chain methodology implementation",
      "Cross-departmental stakeholder alignment",
      "Procurement compliance in regulated environments",
    ],
    deliveryFocus:
      "Multi-year, multi-jurisdiction programmes requiring ministerial-level accountability and measurable outcomes.",
  },
  {
    icon: Building,
    title: "Digital Government Infrastructure",
    description:
      "Secure platforms connecting citizens, agencies, and administrative systems.",
    capabilities: [
      "Citizen-facing service platforms",
      "Inter-agency data exchange systems",
      "Administrative system modernisation",
      "Legacy-to-modern architecture bridging",
    ],
    deliveryFocus:
      "Maintaining service continuity and compliance while modernising critical government systems.",
  },
];

const reasons = [
  {
    title: "Delivery credibility",
    description:
      "We've led programmes spanning multiple countries and jurisdictions, with proven outcomes in classified and unclassified environments.",
  },
  {
    title: "Governance expertise",
    description:
      "We expose and eliminate the waste that derails major programmes—before it costs you years and millions.",
  },
  {
    title: "Operational reality",
    description:
      "We understand that government infrastructure must work 24/7, through transitions, and under political scrutiny.",
  },
];

export default function IndustriesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Industries
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl leading-relaxed">
            Crimson Industries Corporation delivers mission-critical
            infrastructure to government clients operating in complex,
            high-stakes environments. We specialise in programmes where failure
            is not an option.
          </p>
        </div>
      </section>

      {/* Industries List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-crimson-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-6 h-6 text-crimson-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-lg text-slate-600 mb-6">
                  {industry.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">
                    Capabilities:
                  </p>
                  <ul className="space-y-2">
                    {industry.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-crimson-600 mt-2 flex-shrink-0" />
                        <span className="text-slate-600">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm font-semibold text-slate-800 mb-2 uppercase tracking-wide">
                    Delivery focus:
                  </p>
                  <p className="text-slate-600">{industry.deliveryFocus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Governments Choose Crimson */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Why Governments Choose Crimson
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-crimson-600 to-crimson-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Programme Enquiries
          </h2>
          <p className="text-lg text-crimson-100 mb-8">
            Ready to discuss your mission-critical infrastructure requirements?
            Our experts are prepared to provide tailored solutions for your
            government programme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="bg-white text-crimson-700 hover:bg-crimson-50 px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
                Contact Us Directly
              </button>
            </Link>
            <Link href="/services">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-crimson-700 px-8 py-4 rounded-full transition-all duration-200 font-medium">
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
