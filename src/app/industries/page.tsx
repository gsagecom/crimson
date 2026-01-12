import Link from "next/link";
import {
  Phone,
  Shield,
  Zap,
  Radio,
  Eye,
  DollarSign,
  Target,
  Settings,
  FileCheck,
  AlertTriangle,
} from "lucide-react";

const industries = [
  {
    icon: Phone,
    title: "Telecom Infrastructure",
    description:
      "Advanced telecommunications infrastructure for next-generation connectivity and smart communications.",
    areas: ["5G Networks", "Fiber Optic Systems", "Smart Infrastructure", "Network Security"],
  },
  {
    icon: Shield,
    title: "Logistics and Security",
    description:
      "Comprehensive logistics and cyber security solutions for critical infrastructure and supply chain management.",
    areas: ["Supply Chain", "Port Security", "Asset Tracking", "Risk Management"],
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description:
      "Next-generation emergency response systems and public safety infrastructure deployments.",
    areas: ["Emergency Response", "Medical Systems", "Crisis Management", "Public Safety"],
  },
  {
    icon: Radio,
    title: "Next Generation 999/911/112",
    description:
      "Advanced emergency communication systems for enhanced public safety and rapid response coordination.",
    areas: ["Emergency Communications", "Call Center Technology", "Response Coordination", "System Integration"],
  },
  {
    icon: Eye,
    title: "Surveillance & cyber security",
    description:
      "Advanced surveillance and cyber security solutions for protecting critical infrastructure and digital assets.",
    areas: ["Cyber Protection", "Surveillance Systems", "Threat Detection", "Security Monitoring"],
  },
  {
    icon: DollarSign,
    title: "Financial Services & Assurance",
    description:
      "Driving positive technology transformation in financial services for clients and their customers.",
    areas: ["Technology Transformation", "Programme Management", "Six Sigma Process", "Security Solutions"],
  },
];

const capabilities = [
  {
    icon: Target,
    title: "Strategic Planning",
    description:
      "Comprehensive industry analysis and strategic roadmap development for infrastructure projects.",
  },
  {
    icon: Settings,
    title: "Technology Integration",
    description:
      "Seamless integration of cutting-edge technology solutions across multiple industry verticals.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description:
      "Expert navigation of complex regulatory requirements and compliance frameworks.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description:
      "Industry-specific confidential risk assessment and mitigation strategies for predictable project outcomes.",
  },
];

export default function IndustriesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Crimson Industries Corporation delivers mission-critical infrastructure to government clients operating in complex, high-stakes environments. We specialise in programmes where failure is not an option.
          </p>
        </div>
      </section>

      {/* Specialized Industry Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Specialized Industry Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our deep industry knowledge and specialized expertise enable us to
              deliver tailored solutions that address the unique challenges and
              requirements of each sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-crimson-100 rounded-xl flex items-center justify-center mb-4">
                  <industry.icon className="w-7 h-7 text-crimson-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-slate-600 mb-4">{industry.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    Key Focus Areas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.areas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/contact">
                  <button className="w-full bg-crimson-600 hover:bg-crimson-700 text-white py-2.5 rounded-full transition-all duration-200 font-medium text-sm">
                    Explore Industry
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Cross-Industry Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our comprehensive capabilities span across industries, providing
              consistent excellence and leveraging best practices from multiple
              sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg"
              >
                <div className="w-14 h-14 bg-crimson-100 rounded-xl flex items-center justify-center mb-4">
                  <capability.icon className="w-7 h-7 text-crimson-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {capability.title}
                </h3>
                <p className="text-slate-600 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-crimson-600 to-crimson-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transforming Industries Through Innovation
            </h2>
            <p className="text-lg text-crimson-100 max-w-3xl mx-auto">
              Our industry-focused approach enables us to deliver solutions that
              not only meet current requirements but anticipate future needs. We
              leverage cross-industry insights to drive innovation and create
              lasting value.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">93+</div>
              <div className="text-crimson-200 font-medium">
                Projects Delivered
              </div>
              <div className="text-crimson-300 text-sm">
                Across All Industries
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-crimson-200 font-medium">Countries</div>
              <div className="text-crimson-300 text-sm">Global Presence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-crimson-200 font-medium">Core Industries</div>
              <div className="text-crimson-300 text-sm">
                Specialized Expertise
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-crimson-200 font-medium">
                Client Satisfaction
              </div>
              <div className="text-crimson-300 text-sm">Proven Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Partner With Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Ready to leverage our industry expertise for your next project?
            Contact us to discuss how our specialized knowledge can drive
            success in your sector.
          </p>
          <Link href="/contact">
            <button className="bg-crimson-600 hover:bg-crimson-700 text-white px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
