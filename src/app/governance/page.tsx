import Link from "next/link";
import {
  FileText,
  Settings,
  Shield,
  BarChart3,
  AlertTriangle,
  Building,
  Target,
  Cog,
  Scale,
  Monitor,
} from "lucide-react";

const documents = [
  {
    icon: FileText,
    title: "Handbook",
    description: "Comprehensive handbook for project governance and procedures",
  },
  {
    icon: Settings,
    title: "Requirements",
    description: "Essential requirements and specifications documentation",
  },
  {
    icon: Shield,
    title: "Governance Framework",
    description: "Governance framework and management structures",
  },
  {
    icon: BarChart3,
    title: "Systems Integration",
    description: "Systems integration methodologies and best practices",
  },
  {
    icon: AlertTriangle,
    title: "Risk Management",
    description: "Risk assessment and management frameworks",
  },
  {
    icon: Building,
    title: "Procurement Guidelines",
    description: "Procurement strategies and management guidelines",
  },
];

const frameworks = [
  {
    icon: Target,
    title: "Strategic Governance",
    description:
      "Comprehensive strategic planning and governance oversight for complex megaprojects.",
    components: [
      "Strategic Planning",
      "Stakeholder Management",
      "Decision Frameworks",
      "Performance Monitoring",
    ],
  },
  {
    icon: Cog,
    title: "Operational Excellence",
    description:
      "Operational governance frameworks ensuring efficient project delivery and quality outcomes.",
    components: [
      "Process Optimization",
      "Quality Assurance",
      "Resource Management",
      "Continuous Improvement",
    ],
  },
  {
    icon: Scale,
    title: "Risk & Compliance",
    description:
      "Advanced risk management and regulatory compliance frameworks for project success.",
    components: [
      "Risk Assessment",
      "Compliance Monitoring",
      "Regulatory Navigation",
      "Audit Management",
    ],
  },
  {
    icon: Monitor,
    title: "Technology Governance",
    description:
      "Technology governance frameworks for digital transformation and innovation management.",
    components: [
      "Digital Strategy",
      "Technology Integration",
      "Data Governance",
      "Innovation Management",
    ],
  },
];

const reasons = [
  {
    number: "1",
    title: "Strategic Oversight",
    description:
      "Comprehensive strategic planning and oversight ensuring projects align with organizational objectives.",
  },
  {
    number: "2",
    title: "Risk Mitigation",
    description:
      "Advanced risk assessment and management frameworks that proactively address potential challenges.",
  },
  {
    number: "3",
    title: "Quality Assurance",
    description:
      "Robust quality frameworks ensuring consistent delivery standards and continuous improvement.",
  },
];

export default function GovernancePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Governance
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive governance documentation and frameworks for strategic
            execution and compliance management across all project phases.
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Governance Framework Documents
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Access our comprehensive library of governance documents, providing
              detailed frameworks for project management, compliance, and
              strategic execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-crimson-100 rounded-xl flex items-center justify-center mb-4">
                  <doc.icon className="w-7 h-7 text-crimson-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {doc.title}
                </h3>
                <p className="text-slate-600 mb-4">{doc.description}</p>
                <Link href="/contact">
                  <button className="w-full bg-crimson-600 hover:bg-crimson-700 text-white py-2.5 rounded-full transition-all duration-200 font-medium text-sm">
                    Request Access
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Governance Frameworks
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our proven governance frameworks ensure project success through
              structured oversight, strategic planning, and comprehensive risk
              management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {frameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg"
              >
                <div className="w-14 h-14 bg-crimson-100 rounded-xl flex items-center justify-center mb-6">
                  <framework.icon className="w-7 h-7 text-crimson-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {framework.title}
                </h3>
                <p className="text-slate-600 mb-4">{framework.description}</p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    Key Components:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {framework.components.map((component, compIndex) => (
                      <span
                        key={compIndex}
                        className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full"
                      >
                        {component}
                      </span>
                    ))}
                  </div>
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

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Crimson Industries Governance?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our governance frameworks provide the structure and oversight
              necessary for delivering complex megaprojects with predictable
              outcomes.
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-crimson-600 to-crimson-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Governance Excellence in Numbers
            </h2>
            <p className="text-lg text-crimson-100 max-w-3xl mx-auto">
              Our governance frameworks ensure accountability, transparency, and
              strategic alignment throughout the project lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-crimson-200 font-medium">Compliance Rate</div>
              <div className="text-crimson-300 text-sm">Regulatory Standards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">93+</div>
              <div className="text-crimson-200 font-medium">
                Projects Governed
              </div>
              <div className="text-crimson-300 text-sm">Successfully Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-crimson-200 font-medium">Countries</div>
              <div className="text-crimson-300 text-sm">Global Expertise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="text-crimson-200 font-medium">Major Incidents</div>
              <div className="text-crimson-300 text-sm">Perfect Track Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Need Custom Governance Solutions?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our governance frameworks can be tailored to your specific project
            requirements. Contact us to discuss custom solutions for your
            organization.
          </p>
          <Link href="/contact">
            <button className="bg-crimson-600 hover:bg-crimson-700 text-white px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
              Contact Our Experts
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
