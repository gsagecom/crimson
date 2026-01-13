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

const services = [
  {
    icon: FileText,
    title: "Emergency Services & Public Safety",
    description:
      "Next-generation emergency communications infrastructure for national and regional deployments.",
    features: [
      "NG911/NG112 call handling and dispatch systems",
      "Multi-agency interoperability platforms",
      "CAD integration and legacy system migration",
      "24/7 operational continuity during transition",
    ],
  },
  {
    icon: Shield,
    title: "Critical National Infrastructure",
    description:
      "Secure communications networks for government command, control, and coordination operations",
    features: [
      "Hardened data centre design and implementation",
      "Redundant transmission systems",
      "Cyber-resilient network architectures",
      "Sovereign data residency solutions",
    ],
  },
  {
    icon: Zap,
    title: "Next Generation Project Management",
    description:
      "Advanced project management methodologies leveraging cutting-edge technology and innovation.",
    features: [
      "Digital transformation",
      "Advanced methodologies",
      "Technology integration",
      "Performance analytics",
    ],
  },
  {
    icon: CheckCircle,
    title: "AI Focussed Quality Assurance and Compliance Solutions",
    description:
      "AI-powered quality assurance and compliance management for enhanced project outcomes.",
    features: [
      "AI-powered QA",
      "Automated compliance",
      "Predictive analytics",
      "Risk mitigation",
    ],
  },
  {
    icon: Building,
    title: "Commercial & Asset Management",
    description:
      "Strategic commercial and asset management solutions for maximum value optimization.",
    features: [
      "Asset optimization",
      "Commercial strategy",
      "Value engineering",
      "Lifecycle management",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Risk & Security Management",
    description:
      "Comprehensive risk assessment and security management for complex infrastructure projects.",
    features: [
      "Risk assessment",
      "Security protocols",
      "Threat mitigation",
      "Compliance monitoring",
    ],
  },
  {
    icon: Eye,
    title: "Public Safety Systems",
    description:
      "Public safety systems development and implementation for next-generation emergency response.",
    features: [
      "Emergency systems",
      "Response coordination",
      "Safety protocols",
      "System integration",
    ],
  },
    {
    icon: FileText,
    title: "Turnkey Megaproject Management",
    description:
      "Complete project oversight from conception to completion with comprehensive management solutions.",
    features: [
      "End-to-end project delivery",
      "Strategic planning",
      "Resource optimization",
      "Quality assurance",
    ],
  },
];

const reasons = [
  {
    number: "1",
    title: "Proven Track Record",
    description:
      "Decades of experience delivering complex megaprojects across multiple industries and markets.",
  },
  {
    number: "2",
    title: "Innovation-Driven",
    description:
      "Cutting-edge technology and AI-powered solutions for enhanced project outcomes and efficiency.",
  },
  {
    number: "3",
    title: "Global Expertise",
    description:
      "International presence with deep understanding of local markets and regulatory requirements.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for megaproject management, from strategic
            planning to intelligent infrastructure delivery. Discover how our
            expertise can transform your project vision into reality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Expert Solutions for Every Challenge
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our comprehensive suite of services covers every aspect of
              megaproject delivery, from initial conception through final
              implementation and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-crimson-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-crimson-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    Key Features:
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-crimson-600" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact">
                  <button className="w-full bg-crimson-600 hover:bg-crimson-700 text-white py-3 rounded-full transition-all duration-200 font-medium">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Crimson Industries?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our unique approach combines proven methodologies with innovative
              technology to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-crimson-500 to-crimson-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {reason.number}
                  </span>
                </div>
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
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-lg text-crimson-100 mb-8">
            Let&apos;s discuss how our comprehensive service portfolio can drive
            your project to success. Our experts are ready to provide customised
            solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-crimson-700 hover:bg-crimson-50 px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
                Get Started Today
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-crimson-700 px-8 py-4 rounded-full transition-all duration-200 font-medium">
                Learn More About Crimson Industries
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
